import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        leckerli: 'index.html',
        'leckerli-gtm': 'src/gtm.ts',
        'gtm-html': 'gtm-basic.html'
      },
      output: {
        entryFileNames: 'assets/[name].min.js',
        chunkFileNames: 'assets/[name].min.js',
        assetFileNames: 'assets/leckerli.min.[ext]'
      }
    }
  },
  define: {
    APP_VERSION: JSON.stringify(version),
  },
})
