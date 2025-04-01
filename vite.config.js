import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 将对 vue 的默认导入重定向到 vue 的命名导出
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
