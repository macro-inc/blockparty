import { glassMaterial, glowMaterial, sceneBackground } from '../theme/utils/threeMaterials';
import { RoundedBoxGeometry, OrbitControls, EXRLoader } from 'three-stdlib';
import { createNoise3D } from 'simplex-noise';
import skyExr from '../assets/sky.exr?url';
import { onMount } from 'solid-js';
import * as THREE from 'three';

function smoothstep(x: number): number {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
}

// Constants
const gridSize = 4;
const count = gridSize * gridSize * gridSize;
const cubeSize = 0.98;
const noiseScale = 0.08;

// Noise function
const noise3D = createNoise3D();

// Geometries
const boxGeometry = new RoundedBoxGeometry(cubeSize, cubeSize, cubeSize, 2, 0.08);
const sphereGeometry = new THREE.SphereGeometry(cubeSize * 0.1, 10, 5);

// Positions
const positions = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  positions[i * 3] = (i % gridSize) - (gridSize - 1) / 2;
  positions[i * 3 + 1] = (Math.floor(i / gridSize) % gridSize) - (gridSize - 1) / 2;
  positions[i * 3 + 2] = Math.floor(i / (gridSize * gridSize)) - (gridSize - 1) / 2;
}

// Scene
const scene = new THREE.Scene();
scene.background = sceneBackground;

// Camera
const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 1000);
camera.position.set(11.5, 11.5, 11.5);

// Renderer
const renderer = new THREE.WebGLRenderer({
  powerPreference: 'high-performance',
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotateSpeed = -0.75;
controls.enableRotate = false;
controls.target.set(0, 0, 0);
controls.enableZoom = false;
controls.autoRotate = true;
controls.enablePan = false;

// Lighting
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(10, 10, 5);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-10, -10, -5);
scene.add(directionalLight2);

// Environment
let envReady = false;
const exrLoader = new EXRLoader();
exrLoader.load(skyExr, (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  envReady = true;
});

const sphereMesh = new THREE.InstancedMesh(sphereGeometry, glowMaterial, count);
const boxMesh = new THREE.InstancedMesh(boxGeometry, glassMaterial, count);
sphereMesh.frustumCulled = false;
boxMesh.frustumCulled = false;
scene.add(sphereMesh);
scene.add(boxMesh);

// Animation Helpers
const tempQuaternion = new THREE.Quaternion();
const tempPosition = new THREE.Vector3();
const tempMatrix = new THREE.Matrix4();
const tempScale = new THREE.Vector3();
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  if (!envReady) { return };

  const time = clock.getElapsedTime() * 0.2;

  for (let i = 0; i < count; i++) {
    const x = positions[i * 3];
    const y = positions[i * 3 + 1];
    const z = positions[i * 3 + 2];

    const noiseValue = (noise3D(
      x * noiseScale + time,
      y * noiseScale + time,
      z * noiseScale + time
    ) + 1) * 0.5;

    const scale = 0.1 + smoothstep(noiseValue) * 0.9;

    tempPosition.set(x, y, z);
    tempScale.setScalar(scale);
    tempMatrix.compose(tempPosition, tempQuaternion, tempScale);

    boxMesh.setMatrixAt(i, tempMatrix);
    sphereMesh.setMatrixAt(i, tempMatrix);
  }

  boxMesh.instanceMatrix.needsUpdate = true;
  sphereMesh.instanceMatrix.needsUpdate = true;

  controls.update();
  renderer.render(scene, camera);
}

export function Canvas() {
  let containerRef!: HTMLDivElement;

  // Resize
  function handleResize() {
    camera.aspect = containerRef.clientWidth / containerRef.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerRef.clientWidth, containerRef.clientHeight, false);
  }

  onMount(() => {
    containerRef.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.top = '0';
    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
  });

  return (
    <div
      class="canvas-wrapper"
    >
      <div
        style="
          position: relative;
          cursor: crosshair;
          height: 100%;
          width: 100%;
        "
        ref={containerRef}
      />
    </div>
  );
}
