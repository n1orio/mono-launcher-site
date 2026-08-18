# Mono Launcher — официальный сайт

Статический SPA (Vue 3 + Vite + Tailwind v4) для лаунчера [Mono Launcher](https://github.com/n1orio/mono-launcher).

## Страницы

- `/` — лендинг: герой, кнопка скачивания, возможности, статистика.
- `/invite` — приглашение в сборку по глубокой ссылке `mono://add-pack?url=&name=&blog=`.
  Сюда ведут ссылки-приглашения; страница автоматически открывает лаунчер, а если он
  не установлен — предлагает скачать.
- Любой неизвестный путь (в т.ч. старые ссылки вида `?url=...`) — на главную.

## Статистика

Блок «Сообщество` тянет живые счётчики с бэкенда (`GET /stats` → `{ accounts, packs }`).
При недоступности бэкенда показывает placeholder вместо падения страницы.

**Адрес бэкенда** задаётся через `VITE_API_BASE` (по умолчанию пустой — запросы идут на
относительные пути, совпадающие с маршрутами бэкенда `/stats`, `/curseforge/*`):
- в **dev** — dev-сервер Vite проксирует `/stats` и `/curseforge` на `localhost:8080`
  (см. `vite.config.js`);
- в **проде** — Caddy проксирует те же пути на бэкенд (см. `deploy/Caddyfile`).

## Разработка

```bash
npm install
npm run dev       # http://localhost:5173 (API на localhost:8080)
npm run build     # → dist/ (статический сайт)
npm run preview   # превью собранного
```

## Сборка / деплой

Сайт — статика: собранный `dist/` раздаёт любой веб-сервер (Caddy/Nginx/GitHub Pages).
Vue собирается локально, на сервере Node не нужен.

## Структура

```
src/
  main.js             # точка входа
  router/index.js     # маршруты (/, /invite, catch-all)
  App.vue             # навбар + футер + RouterView
  views/Home.vue      # лендинг
  views/Invite.vue    # диплинк
  composables/useStats.js  # загрузка статистики
  style.css           # дизайн-токены + Tailwind
public/mono.svg       # логотип (favicon)
deploy/Caddyfile      # пример конфига для прода
```