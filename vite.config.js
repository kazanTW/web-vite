import { defineConfig } from 'vite'
import typescript2 from 'rollup-plugin-typescript2'
import image from '@rollup/plugin-image'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    { ...image(), enforce: 'pre' },
    { ...typescript2(), apply: 'build' }
  ],
  resolve: {
    alias: {
      '/images': 'src/assets/images',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/base.scss";`
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        article: resolve(__dirname, 'article/index.html')
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
})
