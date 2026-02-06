import BlockLogo from '../assets/block-logo.svg';
import { breakpoint } from '../utils/utils';
import { Display } from './Display';

export function Banner() {
  return (
    <div
      style={{
        'border-bottom': breakpoint() ? 'none' : '1px dashed var(--c4)',
        'padding': breakpoint() ? '0' : '20px',
        'display': 'grid',
        'gap': '20px',
      }}
    >
      <BlockLogo
        style="
          aspect-ratio: 402 / 106;
          flex-shrink: 0;
          width: 100%;
        "
      />
      <Display when={!breakpoint()}>
        <div
          style="
            grid-template-columns: repeat(16, 1fr);
            text-align: center;
            display: grid;
            width: 100%;
          "
        >
          <div>B</div>
          <div>L</div>
          <div>O</div>
          <div>C</div>
          <div>K</div>
          <div>P</div>
          <div>A</div>
          <div>R</div>
          <div>T</div>
          <div>Y</div>
          <div></div>
          <div>V</div>
          <div>O</div>
          <div>L</div>
          <div>.</div>
          <div>2</div>
        </div>
      </Display>
    </div>
  );
}
