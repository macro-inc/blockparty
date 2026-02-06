import { viteSingleFile } from 'vite-plugin-singlefile';
import solidSvg from 'vite-plugin-solid-svg';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInlineLimit: 10 * 1024 * 1024, // 10MB
    target: 'esnext',
  },
  assetsInclude: ['**/*.exr'],
  plugins: [
    viteSingleFile(),
    solidPlugin(),
    solidSvg()
  ],
  server: {
    port: 3000,
  },
});
