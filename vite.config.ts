import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 追加

// https://vite.dev/config/
export default defineConfig({
  plugins: [
	react(),
	tailwindcss(), // 追加
],
  server: {
    host: '0.0.0.0', // 0.0.0.0を指定することでコンテナ外からアクセス可能にする
    port: 5173,
    watch: {
      usePolling: true, // WSL/Windows環境でのファイル変更検知を有効にする
    },
  },
})
