import { threeReactive } from '../signals/threeReactive';
import { createEffect } from 'solid-js';
import * as THREE from 'three';

// Scene Background
export const sceneBackground = threeReactive.b0[0]();

createEffect(() => {
  sceneBackground.copy(threeReactive.b0[0]());
});

// Glass Material
export const glassMaterial = new THREE.MeshPhysicalMaterial({
  attenuationColor: threeReactive.a0[0](), // new THREE.Color(0xff0000)
  color: threeReactive.a1[0](), // color: 0xff1100
  attenuationDistance: 0.5,
  side: THREE.DoubleSide,
  envMapIntensity: 1.5,
  transparent: true,
  transmission: 1,
  roughness: 0.0,
  thickness: 1,
  ior: 1.8,
});

createEffect(() => {
  glassMaterial.attenuationColor.copy(threeReactive.a0[0]());
  glassMaterial.color.copy(threeReactive.a0[0]());
});

// Glow Material
export const glowMaterial = new THREE.MeshStandardMaterial({
  emissive: threeReactive.a1[0](), //   emissive: 0x88ff00,
  color: threeReactive.a0[0](), // color: 0xff8800,
  emissiveIntensity: 10,
});

createEffect(() => {
  glowMaterial.emissive.copy(threeReactive.a1[0]());
  glowMaterial.color.copy(threeReactive.a0[0]());
});
