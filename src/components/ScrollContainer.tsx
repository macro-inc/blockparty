import { createSignal, onMount, type JSXElement } from 'solid-js';

const SCROLL_THRESHOLD = 10;

export function ScrollContainer(props: { children: JSXElement }) {
  let scrollRef!: HTMLDivElement;

  const [topOpacity, setTopOpacity] = createSignal(0);
  const [bottomOpacity, setBottomOpacity] = createSignal(0);

  const updateClipIndicators = () => {
    if (!scrollRef) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef;

    const topAmount = Math.min(scrollTop, SCROLL_THRESHOLD);
    setTopOpacity(topAmount / SCROLL_THRESHOLD);

    const maxScroll = scrollHeight - clientHeight;
    const remainingScroll = maxScroll - scrollTop;
    const bottomAmount = Math.min(remainingScroll, SCROLL_THRESHOLD);
    setBottomOpacity(bottomAmount / SCROLL_THRESHOLD);
  };

  onMount(() => {
    const scrollListener = () => {
      updateClipIndicators();
    };
    scrollRef.addEventListener('scroll', scrollListener);
    updateClipIndicators();
    return () => {
      scrollRef.removeEventListener('scroll', scrollListener);
    };
  });

  return (
    <div
      style="
        position: relative;
        isolation: isolate;
        height: 100%;
        width: 100%;
      "
    >
      {/* Top clip boundary indicator */}
      <div
        style={{
          'background': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(128, 128, 128, 0.1) 2px, rgba(128, 128, 128, 0.1) 4px)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black, transparent)',
          'mask-image': 'linear-gradient(to bottom, black, transparent)',
          'border-top': '1px solid rgba(128, 128, 128, 0.3)',
          'transition': 'opacity 150ms',
          'pointer-events': 'none',
          'opacity': topOpacity(),
          'position': 'absolute',
          'height': '12px',
          'z-index': '2',
          'right': '1px',
          'left': '1px',
          'top': '0',
        }}
      />

      {/* Bottom clip boundary indicator */}
      <div
        style={{
          'background': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(128, 128, 128, 0.1) 2px, rgba(128, 128, 128, 0.1) 4px)',
          '-webkit-mask-image': 'linear-gradient(to top, black, transparent)',
          'mask-image': 'linear-gradient(to top, black, transparent)',
          'border-bottom': '1px solid rgba(128, 128, 128, 0.3)',
          'transition': 'opacity 150ms',
          'opacity': bottomOpacity(),
          'pointer-events': 'none',
          'position': 'absolute',
          'height': '12px',
          'z-index': '2',
          'right': '1px',
          'bottom': '0',
          'left': '1px',
        }}
      />

      <div
        ref={(r) => {
          scrollRef = r;
        }}
        style="
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%,
          width: 100%,
        "
      >
        {props.children}
      </div>
    </div>
  );
}
