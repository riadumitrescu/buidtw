import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/build-to-wear/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        founders: resolve(__dirname, 'src/founders.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        story: resolve(__dirname, 'src/stories/1.html')
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
}); 