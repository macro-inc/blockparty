import BlockLogo from '../assets/block-logo.svg';

export function Banner() {
  return (
    <>
      <style>{`
        @media(max-width: 1000px){
          .hide-logo{
            display: none !important;
          }
        }
      `}</style>
      <div
        style="
          border-bottom: 1px dashed var(--c4);
          display: grid;
          padding: 20px;
          gap: 20px;
        "
      >
        <BlockLogo
          style="
            aspect-ratio: 402 / 106;
            flex-shrink: 0;
            width: 100%;
          "
        />
        <div
          style="
            grid-template-columns: repeat(16, 1fr);
            text-align: center;
            display: grid;
            width: 100%;
          "
          class="hide-logo"
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
      </div>
    </>
  );
}
