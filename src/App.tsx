import { currentThemeId, themeShouldMatchSystem, systemMode, darkModeTheme, lightModeTheme } from './theme/signals/themeSignals';
import { applyTheme, systemThemeEffect } from './theme/utils/themeUtils';
import { SideBar } from './components/SideBar';
import { Canvas } from './components/Canvas';
import type { Component } from 'solid-js';

const App: Component = () => {
  systemThemeEffect();
  if (themeShouldMatchSystem()) {applyTheme(systemMode() === 'dark' ? darkModeTheme() : lightModeTheme())}
  else { applyTheme(currentThemeId()) }

  return (
    <main id="main">
      <Canvas />
      <SideBar />
    </main>
  );
};

export default App;
