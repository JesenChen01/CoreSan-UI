import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import * as packageJson from './package.json';

// 获取外部依赖（排除 peerDependencies）
const external = [
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default defineConfig({
  plugins: [vue()],
  build: {
    // 启用 CSS 代码分离
    cssCodeSplit: true,
    lib: {
      // 核心入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyMobileUiComponents',
      // 打包文件名
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      // 目标格式：es 供 module，cjs 供 main
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external, // 确保 Vue 等不会被打包进去
    },
    // 生成类型声明文件
    copyPublicDir: false,
  },
});