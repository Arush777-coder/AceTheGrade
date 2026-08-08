import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is intentionally disabled in the AI Studio cloud sandbox to prevent screen flickering during live AI edits.
      hmr: process.env.DISABLE_HMR === 'true' ? false : true,
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
