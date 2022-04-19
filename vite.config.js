import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'localhost', // 指定host
    port:8888, // 更改端口
  },
  plugins: [vue()]
})
