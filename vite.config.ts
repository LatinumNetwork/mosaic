import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// NOTE: Check out https://vitejs.dev/config/ for docs
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
