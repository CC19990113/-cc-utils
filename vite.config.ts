import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'cc-tools',
      // fileName: (format) => `cc-tools.${format}.js` // 打包后的文件名
      fileName:`index` // 打包后的文件名
    },
  }
})
