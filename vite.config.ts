import { defineConfig } from 'vite'
import { resolve } from 'path'

import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'source/index'),
      name: 'Counter',
      formats: ['es'],
      fileName: 'index',
    },
  },
  plugins: [dts()],
})
