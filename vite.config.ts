import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const env = loadEnv('all', './');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: env.VITE_ENVIRONMENT_MODE === 'dev' ? '/' : '/filmorama/',
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
