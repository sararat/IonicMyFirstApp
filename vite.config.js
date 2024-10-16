import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';  // Import the Vue plugin

export default defineConfig({
  plugins: [vue()],  // Add the Vue plugin to the Vite config
  resolve: {
    alias: {
      '@': '/src',  // This allows you to use '@' to reference the 'src' directory
    },
  },
});
