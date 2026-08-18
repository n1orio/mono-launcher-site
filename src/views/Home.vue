<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStats } from '../composables/useStats'

const router = useRouter()
const { stats, loading, error } = useStats()

function goToDownload() {
  // TODO: заменить на реальный URL дескриптора установки / страницы релиза.
  window.open('https://github.com/n1orio/mono-launcher/releases', '_blank', 'noopener')
}

const features = [
  { title: 'Каталог сборок', text: 'Встроенные и пользовательские модпаки, поиск, фильтры и рейтинг.', icon: '▦' },
  { title: 'Один клик до игры', text: 'Установка, обновление и запуск Minecraft из лаунчера без возни.', icon: '▶' },
  { title: 'Мультиаккаунт', text: 'Несколько профилей и войти через Ely.by или офф. аккаунт.', icon: '☑' },
  { title: 'Безопасность', text: 'Хэш-проверка всех файлов и доверенные источники загрузки.', icon: '◈' },
]

const statItems = computed(() => [
  { label: 'Пользователей', value: stats.value.accounts },
  { label: 'Авторских сборок', value: stats.value.packs },
])
</script>

<template>
  <div>
    <!-- Hero -->
    <section id="hero" class="relative">
      <div class="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <p class="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-alpha)] px-3 py-1 text-xs text-[color:var(--tx-dim)]">
          Открытый лаунчер для модпаков Minecraft
        </p>
        <h1 class="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
          Запускай модпаки<br class="hidden sm:block" />
          <span class="text-[color:var(--accent)]">в один клик</span>
        </h1>
        <p class="mx-auto mt-5 max-w-xl text-base text-[color:var(--tx-dim)]">
          Mono Launcher — лёгкий и быстрый лаунчер для Minecraft модпаков.
          Установи, выбери сборку и играй.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button class="btn-accent rounded-xl px-6 py-3 text-sm" @click="goToDownload">
            Скачать для Windows
          </button>
          <button
            class="btn-ghost rounded-xl px-6 py-3 text-sm"
            @click="router.push('/invite')"
          >
            Пригласить в сборку
          </button>
        </div>

        <p class="mt-4 text-xs text-[color:var(--tx-dim)]">
          Также доступен для macOS и Linux
        </p>
      </div>
    </section>

    <!-- Возможности -->
    <section id="features" class="border-t border-[color:var(--border)]">
      <div class="max-w-6xl mx-auto px-4 py-16">
        <h2 class="text-center text-2xl font-semibold">Возможности</h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="f in features"
            :key="f.title"
            class="glass card-hover rounded-2xl p-5"
          >
            <div class="text-2xl text-[color:var(--accent)]" aria-hidden="true">{{ f.icon }}</div>
            <h3 class="mt-3 font-semibold">{{ f.title }}</h3>
            <p class="mt-1 text-sm text-[color:var(--tx-dim)]">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Статистика -->
    <section id="stats" class="border-t border-[color:var(--border)]">
      <div class="max-w-6xl mx-auto px-4 py-16">
        <h2 class="text-center text-2xl font-semibold">Сообщество</h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          <div
            v-for="s in statItems"
            :key="s.label"
            class="glass rounded-2xl p-6 text-center"
          >
            <div class="text-3xl font-bold text-[color:var(--accent)]">
              <template v-if="loading">—</template>
              <template v-else>{{ error ? '?' : (s.value ?? 0).toLocaleString('ru-RU') }}</template>
            </div>
            <div class="mt-1 text-sm text-[color:var(--tx-dim)]">{{ s.label }}</div>
          </div>
        </div>
        <p v-if="error" class="mt-6 text-center text-xs text-[color:var(--tx-dim)]">
          Статистика временно недоступна.
        </p>
      </div>
    </section>
  </div>
</template>