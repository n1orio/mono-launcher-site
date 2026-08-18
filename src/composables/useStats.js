import { ref, onMounted } from 'vue'

// Адрес бэкенда. В dev (npm run dev) Vite проксирует /stats и /curseforge/* на
// localhost:8080; в проде это делает Caddy. Поэтому base пустой — запросы идут
// на относительный путь, совпадающий с маршрутами бэкенда.
const API_BASE = import.meta.env.VITE_API_BASE || ''

export { API_BASE }

/** Живая статистика с бэкенда. При недоступности — безопасный fallback. */
export function useStats() {
  const stats = ref({
    accounts: null,
    packs: null,
  })
  const loading = ref(true)
  const error = ref(false)

  async function load() {
    loading.value = true
    error.value = false
    try {
      const res = await fetch(`${API_BASE}/stats`, {
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      stats.value = {
        accounts: Number(data?.accounts ?? 0),
        packs: Number(data?.packs ?? 0),
      }
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return { stats, loading, error, reload: load }
}