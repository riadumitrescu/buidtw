import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/buildtowear/',
  root: 'src',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        story: resolve(__dirname, 'src/stories/1.html'),
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  publicDir: '../public',
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
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default',
          discardComments: {
            removeAll: true,
          },
        }),
      ],
    },
  },
}); 