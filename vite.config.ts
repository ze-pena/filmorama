import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@configs': '/src/configs',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@store': '/src/store',
    },
  },
});
