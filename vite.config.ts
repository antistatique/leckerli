import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import terser from '@rollup/plugin-terser';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    minify: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        leckerli: 'index.html',
        'leckerli-gtm': 'src/gtm.ts',
        'gtm-html': 'gtm-basic.html'
      },
      output: [
        {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/leckerli.min.[ext]',
        },
        {
          entryFileNames: 'assets/[name].min.js',
          chunkFileNames: 'assets/[name].min.js',
          assetFileNames: 'assets/leckerli.min.[ext]',
          plugins: [terser()]
        }
      ]
    }
  },
  define: {
    APP_VERSION: JSON.stringify(version),
  },
})
