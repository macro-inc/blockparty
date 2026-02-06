import BlockLogo from '../assets/block-logo.svg';
import { SectionLabel } from "./SectionLabel";

export function Banner() {
  return (
    <div
      style="
        display: grid;
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

      <div>
        <SectionLabel text="Blockparty Vol.2" />
        8 develeopers × 6 minutes. SRC Lower Level. Free screen printing designs by Paal World and Emile Fortune (blanks for sale or byo). Presented by Macro.
      </div>
    </div>
  );
}
