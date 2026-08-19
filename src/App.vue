<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
// Переход на invite-вид при любом запросе с ?url=
const isInvite = computed(() => !!(route.query.url || route.name === 'invite'))
</script>

<template>
  <div class="relative bg-[#05070c] min-h-screen text-white font-sans selection:bg-[#58a6ff] selection:text-black">

    <!-- === ХЕДЕР (синеватая тема лаунчера) === -->
    <header class="fixed top-0 inset-x-0 z-50 bg-[#05070c]/40 backdrop-blur-xl border-b border-[#191e2a]/50 transition-all duration-300">
      <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        <!-- Логотип -->
        <a href="/" class="flex items-center gap-3 group" aria-label="MonoLauncher">
          <!-- Геометрическая иконка -->
          <div class="w-6 h-6 bg-[#58a6ff] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(88,166,255,0.35)]">
            <div class="w-2 h-2 bg-[#05070c] rounded-full"></div>
          </div>
          <span class="font-extrabold text-xl tracking-tight uppercase text-white">MonoLauncher</span>
        </a>

        <!-- Навигация (Десктоп) -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" class="text-slate-400 hover:text-white transition-colors">Возможности</a>
          <a href="#authors" class="text-slate-400 hover:text-white transition-colors">Для авторов</a>

          <a href="https://github.com/n1orio/mono-launcher" target="_blank" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
            GitHub
            <svg class="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>

          <a href="https://boosty.to/n1orio" target="_blank" class="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
            Boosty
            <svg class="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>

        <!-- Кнопка действия и Мобильное меню -->
        <div class="flex items-center gap-4">
          <a href="/download" class="hidden sm:flex px-6 py-2 bg-[#58a6ff] text-black text-xs font-bold uppercase tracking-widest rounded items-center gap-2 hover:bg-[#388bfd] transition-colors shadow-[0_0_20px_rgba(88,166,255,0.25)] hover:scale-105 duration-300">
            Скачать
          </a>

          <!-- Бургер-меню (для мобилок) -->
          <button class="md:hidden text-slate-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </nav>
    </header>

    <!-- Основной контент (Роутер) -->
    <!-- h-screen и flex гарантируют, что RouterView займет весь экран и сам будет скроллиться (snap scrolling) -->
    <main class="w-full h-full">
      <RouterView />
    </main>

  </div>
</template>

<style>
@import "tailwindcss";

:root {
  /* Принудительная темная тема для скроллбаров и системных UI */
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
  background: #05070c; /* Фон в тон лаунчера */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Избавляемся от дефолтных скроллбаров в оболочке (они обрабатываются в HomeView) */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
