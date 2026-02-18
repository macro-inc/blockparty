import { currentThemeId, themeShouldMatchSystem, systemMode, darkModeTheme, lightModeTheme } from './theme/signals/themeSignals';
import { applyTheme, systemThemeEffect } from './theme/utils/themeUtils';
import { type Component, createEffect, on } from 'solid-js';
import { themeUpdate } from './theme/signals/themeSignals';
import { SideBar } from './components/SideBar';
import { updateFavicon } from './utils/utils';
import { Canvas } from './components/Canvas';

const App: Component = () => {
  systemThemeEffect();
  if (themeShouldMatchSystem()) {applyTheme(systemMode() === 'dark' ? darkModeTheme() : lightModeTheme())}
  else { applyTheme(currentThemeId()) }

  createEffect(
    on(
      themeUpdate,
      () => {updateFavicon()}
    )
  )

  return (
    <main id="main">
      <Canvas />
      <SideBar />
    </main>
  );
};

export default App;
