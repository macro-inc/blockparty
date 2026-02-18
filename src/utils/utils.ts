import { themeReactive } from "../theme/signals/themeReactive";
import { createSignal } from "solid-js";

const point = 1000;
export const [viewportWidth, setViewportWidth] = createSignal(window.innerWidth);
export const [breakpoint, setBreakpoint] = createSignal(window.innerWidth < point);

window.addEventListener("resize", () => {
  setViewportWidth(window.innerWidth);
  if(window.innerWidth >= point){setBreakpoint(false)}
  else{setBreakpoint(true)};
});

const elementFavicon = document.getElementById('favicon')!;

export function updateFavicon(){
  elementFavicon.setAttribute(
    'href',
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke='oklch(${themeReactive.a0.l[0]()} ${themeReactive.a0.c[0]()} ${themeReactive.a0.h[0]()}deg)' fill='none' version='1.1' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='oklch(${themeReactive.b0.l[0]()} ${themeReactive.b0.c[0]()} ${themeReactive.b0.h[0]()}deg)' stroke='none'/%3E%3Ccircle cx='12' cy='12' r='8' /%3E%3Crect x='4' y='4' width='16' height='16'%3E%3CanimateTransform attributeName='transform' repeatCount='indefinite' keySplines='0.42 0 1 1' calcMode='spline' keyTimes='0; 1' from='0 12 12' type='rotate' to='90 12 12' dur='1.5s' /%3E%3C/rect%3E%3C/svg%3E`
  );
}
