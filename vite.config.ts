import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/leckerli.min.js',
        chunkFileNames: 'assets/leckerli.min.js',
        assetFileNames: 'assets/leckerli.min.[ext]'
      }
    }
  }
})
