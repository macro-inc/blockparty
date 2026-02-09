export function ToyBlock() {
  return (
    <div
      style="
        grid-template-columns: 6ch 1fr;
        grid-template-rows: 22px 22px;
        height: min-content;
        align-items: center;
        display: grid;
        gap: 0px 10px;
        width: 100%;
      "
    >
      <div style="position: relative;">
        <div
          style="
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
            left: 0;
          "
        >
          Speed
        </div>
      </div>
      <div
        style="
          box-sizing: border-box;
          position: relative;
          height: 10px;
          width: 100%;
        "
      >
        <div
          style="
            grid-template-columns: 50fr 40.5fr 32fr 24.5fr 18fr 12.5fr 8fr 5fr 2fr 0.5fr;
            transform: translate(-50%, -50%);
            background-color: var(--c4);
            border: 1px solid var(--c4);
            box-sizing: border-box;
            position: absolute;
            display: grid;
            height: 10px;
            width: 100%;
            left: 50%;
            top: 50%;
            gap: 1px;
          "
        >
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
        </div>

        <div
          style={{
            // 'left': `${(themeReactive.b0.c[0]() / (themeReactive.a0.c[0]() * 0.8) / 0.37) * 100}%`,
            'transform': 'translate(-50%, -50%)',
            'background-color': 'var(--b1)',
            'border': '1px solid var(--c4)',
            'box-sizing': 'border-box',
            'border-radius': '0px',
            'position': 'absolute',
            'height': '18px',
            'width': '18px',
            'top': '50%',
          }}
        />

        <input
          onInput={(e) => {
            // handleSaturationChange(e);
          }}
          class="theme-editor-basic-slider"
          style="
            appearance: none;
            -webkit-appearance: none;
            cursor: var(--cursor-pointer);
            width: calc(100% + 18px);
            box-sizing: border-box;
            border-radius: 0px;
            position: absolute;
            background: #0000;
            outline: none;
            height: 100%;
            left: -9px;
            margin: 0;
            top: 0;
          "
          // ref={sliderSaturationRef}
          step="0.001"
          type="range"
          value="0"
          max="1.0"
          min="0.0"
        />
      </div>




      <div style="position: relative;">
        <div
          style="
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
            left: 0;
          "
        >
          Scale
        </div>
      </div>
      <div
        style="
          box-sizing: border-box;
          position: relative;
          height: 10px;
          width: 100%;
        "
      >
        <div
          style="
            grid-template-columns: 50fr 40.5fr 32fr 24.5fr 18fr 12.5fr 8fr 5fr 2fr 0.5fr;
            transform: translate(-50%, -50%);
            background-color: var(--c4);
            border: 1px solid var(--c4);
            box-sizing: border-box;
            position: absolute;
            display: grid;
            height: 10px;
            width: 100%;
            left: 50%;
            top: 50%;
            gap: 1px;
          "
        >
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
          <div style="background-color: var(--b1); height: 100%; width: 100%;" />
        </div>

        <div
          style={{
            // 'left': `${(themeReactive.b0.c[0]() / (themeReactive.a0.c[0]() * 0.8) / 0.37) * 100}%`,
            'transform': 'translate(-50%, -50%)',
            'background-color': 'var(--b1)',
            'border': '1px solid var(--c4)',
            'box-sizing': 'border-box',
            'border-radius': '0px',
            'position': 'absolute',
            'height': '18px',
            'width': '18px',
            'top': '50%',
          }}
        />

        <input
          onInput={(e) => {
            // handleSaturationChange(e);
          }}
          class="theme-editor-basic-slider"
          style="
            appearance: none;
            -webkit-appearance: none;
            cursor: var(--cursor-pointer);
            width: calc(100% + 18px);
            box-sizing: border-box;
            border-radius: 0px;
            position: absolute;
            background: #0000;
            outline: none;
            height: 100%;
            left: -9px;
            margin: 0;
            top: 0;
          "
          // ref={sliderSaturationRef}
          step="0.001"
          type="range"
          value="0"
          max="1.0"
          min="0.0"
        />
      </div>
    </div>
  )
}
