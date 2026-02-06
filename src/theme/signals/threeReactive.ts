import type { ThreeReactive } from '../types/threeTypes';
import { createEffect, createSignal } from 'solid-js';
import { oklchToRgb } from '../utils/colorUtils';
import { themeReactive } from './themeReactive';
import * as THREE from 'three';

export const threeReactive: ThreeReactive = {
  a0: createSignal(new THREE.Color()),
  a1: createSignal(new THREE.Color()),
  a2: createSignal(new THREE.Color()),
  a3: createSignal(new THREE.Color()),
  a4: createSignal(new THREE.Color()),
  b0: createSignal(new THREE.Color()),
  b1: createSignal(new THREE.Color()),
  b2: createSignal(new THREE.Color()),
  b3: createSignal(new THREE.Color()),
  b4: createSignal(new THREE.Color()),
  c0: createSignal(new THREE.Color()),
  c1: createSignal(new THREE.Color()),
  c2: createSignal(new THREE.Color()),
  c3: createSignal(new THREE.Color()),
  c4: createSignal(new THREE.Color()),
};

function createThreeColorEffect(key: keyof ThreeReactive) {
  createEffect(() => {
    const { r, g, b } = oklchToRgb(
      themeReactive[key].l[0](),
      themeReactive[key].c[0](),
      themeReactive[key].h[0]()
    );
    const color = new THREE.Color();
    color.setRGB(r, g, b, THREE.SRGBColorSpace);
    threeReactive[key][1](color);
  });
}

createThreeColorEffect('a0');
createThreeColorEffect('a1');
createThreeColorEffect('a2');
createThreeColorEffect('a3');
createThreeColorEffect('a4');
createThreeColorEffect('b0');
createThreeColorEffect('b1');
createThreeColorEffect('b2');
createThreeColorEffect('b3');
createThreeColorEffect('b4');
createThreeColorEffect('c0');
createThreeColorEffect('c1');
createThreeColorEffect('c2');
createThreeColorEffect('c3');
createThreeColorEffect('c4');
