import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Added base path to match repository name
  server: {
    hmr: {
      overlay: false // Disable the error overlay for now
    }
  }
});