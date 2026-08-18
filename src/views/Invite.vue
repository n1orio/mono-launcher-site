<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const packUrl = computed(() => String(route.query.url || ''))
const packName = computed(() => String(route.query.name || 'Открытую сборку'))
const packBlog = computed(() => String(route.query.blog || ''))
const valid = computed(() => /^https:\/\//.test(packUrl.value))

const link = computed(() => {
  const params = new URLSearchParams({ url: packUrl.value })
  if (packName.value) params.set('name', packName.value)
  if (packBlog.value) params.set('blog', packBlog.value)
  return `mono://add-pack?${params.toString()}`
})

const fallback = computed(() => {
  return `https://github.com/n1orio/mono-launcher/releases`
})

const status = ref('checking') // checking | opening | unsupported

async function tryOpen() {
  if (!valid.value) return
  status.value = 'opening'
  try {
    // Просим систему открыть кастомный протокол mono://.
    window.location.href = link.value
  } catch {
    status.value = 'unsupported'
  }
  // Проверяем, зарегистрирован ли протокол: если через ~1.5с мы всё ещё тут —
  // значит лаунчер не установлен (браузер не ушёл на него).
  setTimeout(() => {
    if (status.value === 'opening') status.value = 'unsupported'
  }, 1800)
}
</script>

<template>
  <div class="max-w-xl mx-auto px-4 py-16 text-center">
    <template v-if="!packUrl">
      <h1 class="text-2xl font-semibold">Скачать Mono Launcher</h1>
      <p class="mt-3 text-sm text-[color:var(--tx-dim)]">
        Установи лаунчер, чтобы открывать сборки и приглашения в один клик.
      </p>
      <a class="btn-accent inline-block rounded-xl px-6 py-3 text-sm mt-6" :href="fallback" target="_blank" rel="noopener">
        Перейти к релизам
      </a>
    </template>

    <template v-else-if="!valid">
      <h1 class="text-2xl font-semibold">Неверная ссылка</h1>
      <p class="mt-3 text-sm text-[color:var(--tx-dim)]">В этой ссылке нет корректного `url` сборки.</p>
      <a class="btn-ghost inline-block rounded-xl px-6 py-3 text-sm mt-6" href="/">На главную</a>
    </template>

    <template v-else>
      <h1 class="text-2xl font-semibold">Открыть сборку</h1>
      <p class="mt-3 text-sm text-[color:var(--tx-dim)]">
        Лаунчер запустится и покажет <span class="text-[color:var(--tx)]">{{ packName }}</span>.
      </p>

      <div class="mt-8">
        <button
          v-if="status !== 'unsupported'"
          class="btn-accent rounded-xl px-6 py-3 text-sm"
          @click="tryOpen"
        >
          {{ status === 'checking' ? 'Открыть в лаунчере' : 'Открываю…' }}
        </button>

        <div v-else class="space-y-4">
          <p class="text-sm text-[color:var(--tx-dim)]">
            Похоже, лаунчер ещё не установлен.
          </p>
          <a class="btn-accent inline-block rounded-xl px-6 py-3 text-sm" :href="fallback" target="_blank" rel="noopener">
            Скачать Mono Launcher
          </a>
        </div>

        <a
          v-if="status === 'unsupported'"
          class="mt-2 block text-xs text-[color:var(--tx-dim)] hover:text-[color:var(--tx)]"
          :href="link"
        >Системная ссылка mono://add-pack…</a>
      </div>

      <p class="mt-6 text-xs text-[color:var(--tx-dim)]">
        Не нашёл сборку на GitHub? Свяжись с её автором.
      </p>
    </template>
  </div>
</template>