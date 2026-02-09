import { copyThemeToClipboard, deleteTheme, exportTheme, invertTheme, saveTheme } from '../utils/themeUtils';
import { currentThemeId, isThemeSaved, themes } from '../signals/themeSignals';
// import { DeprecatedIconButton } from '@core/component/DeprecatedIconButton';
import { createEffect, createMemo, createSignal, Show } from 'solid-js';
import IconLightDark from '../../assets/icon-lightdark.svg';
import IconClipboard from '../../assets/icon-clipboard.svg';
import IconRandom from '../../assets/icon-random.svg';
import { randomizeTheme } from './ThemeEditorBasic';
import IconTrash from "../../assets/icon-trash.svg";
import IconSave from '../../assets/icon-save.svg';
import { DEFAULT_THEMES } from '../constants';

export function ThemeTools() {
  let themeName!: HTMLDivElement;

  const currentThemeName = createMemo(() => {
    const theme = themes().find((theme) => theme.id === currentThemeId());
    if(isThemeSaved()){return theme?.name}
    else{return 'Theme Name'}
  });

  const [showTrash, setShowTrash] = createSignal<boolean>(true);
  createEffect(() => {
    if(isThemeSaved() && !DEFAULT_THEMES.find((t) => t.id === currentThemeId())){setShowTrash(true)}
    else{setShowTrash(false)}
  });

  const [columnCount, setColumnCount] = createSignal(3);
  createEffect(() => {
    let count = 3;
    if(!isThemeSaved()){count++}
    if(showTrash()){count++}
    setColumnCount(count);
  });

  return (
    <div
      style={{
        'grid-template-columns': `min-content 1fr min-content`,
        'background-color': 'var(--b1)',
        'scrollbar-width': 'none',
        'align-items': 'center',
        'overflow': 'hidden',
        'flex-shrink': '0',
        'display': 'grid',
        'height': '22px',
        'width': '100%',
        'gap': '20px'
      }}
    >
      <div
        style="
          display: grid;
          grid-auto-flow: column;
          gap: 4px;
        "
      >
        <IconRandom
          onPointerDown={randomizeTheme}
          style="
            display: block;
            height: 20px;
            width: 20px;
          "
        />

        <IconLightDark
          onPointerDown={invertTheme}
          style="
            display: block;
            height: 20px;
            width: 20px;
          "
        />
        <IconClipboard
          onPointerDown={() => {copyThemeToClipboard(themeName.innerText)}}
          style="
            display: block;
            height: 20px;
            width: 20px;
          "
        />

        <Show when={!isThemeSaved()}>
          <IconSave
            onPointerDown={() => {saveTheme(themeName.innerText)}}
            style="
              display: block;
              height: 20px;
              width: 20px;
            "
          />
        </Show>

        <Show when={showTrash()}>
          <IconTrash
            onPointerDown={() => {deleteTheme(currentThemeId())}}
            style="
              display: block;
              height: 20px;
              width: 20px;
            "
          />
        </Show>
      </div>

      <hr
        style="
          border: none;
          border-top: 1px dashed var(--c4);
          box-sizing: border-box;
          width: 100%;
        "
      />

      <div ref={themeName}
        style="
          white-space: nowrap;
          outline: none;
        "
        contentEditable
      >
        {currentThemeName()}
      </div>
    </div>
  );
}
