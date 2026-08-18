import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(), tailwindcss()],
    server: command === 'serve'
      ? {
          // В dev проксируем маршруты бэкенда (/stats, /curseforge/*) на
          // локальный сервер (localhost:8080). В проде это делает Caddy.
          proxy: {
            '/stats': 'http://localhost:8080',
            '/curseforge': 'http://localhost:8080',
          },
        }
      : undefined,
  }
})