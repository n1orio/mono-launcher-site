<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
// Переход на invite-вид при любом запросе с ?url= (совместимость со старыми ссылками).
const isInvite = computed(() => !!(route.query.url || route.name === 'invite'))
</script>

<template>
  <div class="min-h-screen flex flex-col hero-glow">
    <header class="sticky top-0 z-30 backdrop-blur bg-[color:var(--bg)]/80 border-b border-[color:var(--border)]">
      <nav class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-semibold" aria-label="Mono Launcher">
          <img src="/mono.svg" alt="" width="24" height="24" />
          <span>Mono Launcher</span>
        </a>
        <div class="flex items-center gap-1 text-sm">
          <a href="/invite" class="px-3 py-1.5 rounded-lg text-[color:var(--tx-dim)] hover:text-[color:var(--tx)] transition-colors">Скачать</a>
          <a href="#features" class="px-3 py-1.5 rounded-lg text-[color:var(--tx-dim)] hover:text-[color:var(--tx)] transition-colors">Возможности</a>
          <a href="#stats" class="px-3 py-1.5 rounded-lg text-[color:var(--tx-dim)] hover:text-[color:var(--tx)] transition-colors">Статистика</a>
          <a
            href="/#download"
            class="ml-2 px-4 py-1.5 rounded-lg btn-accent text-sm"
          >Скачать</a>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t border-[color:var(--border)]">
      <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[color:var(--tx-dim)]">
        <span>© {{ new Date().getFullYear() }} Mono Launcher. Не аффилирован с Mojang / Microsoft.</span>
        <span class="flex gap-4">
          <a href="https://github.com/n1orio/mono-launcher" target="_blank" rel="noopener" class="hover:text-[color:var(--tx)] transition-colors">GitHub</a>
          <a href="https://boosty.to/n1orio" target="_blank" rel="noopener" class="hover:text-[color:var(--tx)] transition-colors">Boosty</a>
        </span>
      </div>
    </footer>
  </div>
</template>