import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 0.0.0.0を指定することでコンテナ外からアクセス可能にする
    port: 5173,
    watch: {
      usePolling: true, // WSL/Windows環境でのファイル変更検知を有効にする
    },
  },
})
