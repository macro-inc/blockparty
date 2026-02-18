import { createSignal } from "solid-js";

const point = 1000;
export const [viewportWidth, setViewportWidth] = createSignal(window.innerWidth);
export const [breakpoint, setBreakpoint] = createSignal(window.innerWidth < point);

window.addEventListener("resize", () => {
  setViewportWidth(window.innerWidth);
  if(window.innerWidth >= point){setBreakpoint(false)}
  else{setBreakpoint(true)};
});
