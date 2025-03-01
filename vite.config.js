import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // This is crucial for GitHub Pages
  server: {
    hmr: {
      overlay: false
    }
  }
});