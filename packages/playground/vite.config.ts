import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // 开发时直接引用源码，无需构建
      coresan: resolve(__dirname, '../coresan/src/index.ts'),
    },
  },
})
