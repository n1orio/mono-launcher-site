<template>
  <!-- Контейнер Snap Scrolling -->
  <div class="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#05070c] text-white font-sans scroll-smooth selection:bg-[#58a6ff] selection:text-black">

    <!-- Динамическая сетка на фоне, общая для всей страницы -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#101a2c_1px,transparent_1px),linear-gradient(to_bottom,#101a2c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] animate-pan-grid opacity-50"></div>
      <!-- Еле заметный шум -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>

    <!-- ==========================================
         ЭКРАН 1: ГЛАВНЫЙ (Герой)
         ========================================== -->
    <section class="snap-start w-full min-h-screen flex flex-col justify-center items-center relative px-6 lg:px-12 z-10 overflow-hidden">
      <!-- Свечение за текстом -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#58a6ff]/[0.05] blur-[100px] rounded-full pointer-events-none"></div>

      <div class="z-10 text-center flex flex-col items-center max-w-5xl w-full">
        <div class="px-4 py-1.5 rounded-full border border-[#1f3350] bg-[#0a1322]/60 backdrop-blur-md text-xs font-semibold tracking-widest text-[#58a6ff] uppercase mb-8 shadow-2xl">
          Tauri • Nuxt • Rust
        </div>

        <!-- Заголовок с градиентом -->
        <h1 class="text-7xl sm:text-8xl lg:text-[130px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#b9d6ff] to-[#2f5f9e] mb-6 uppercase">
          MonoLauncher
        </h1>
        <p class="text-xl sm:text-2xl text-slate-400 font-light tracking-tight mb-12 max-w-2xl">
          Абсолютный контроль над игрой. Ничего лишнего. Только чистый опыт и максимальная производительность.
        </p>

        <!-- Бегущая строка ресурсов -->
        <div class="text-lg sm:text-xl font-medium text-slate-300 flex items-center gap-2 mb-12 bg-[#0a1322]/40 border border-[#1f3350] px-8 py-4 rounded-full backdrop-blur-md whitespace-nowrap shadow-[0_0_40px_rgba(88,166,255,0.04)]">
          <span>Поддержка</span>
          <span class="inline-flex overflow-hidden h-[1.2em] align-bottom relative font-bold text-[#58a6ff]">
            <span class="flex flex-col animate-word-roll text-left">
              <span class="h-[1.2em] leading-[1.2em]">Modrinth</span>
              <span class="h-[1.2em] leading-[1.2em]">CurseForge</span>
              <span class="h-[1.2em] leading-[1.2em]">Авторских сборок</span>
              <span class="h-[1.2em] leading-[1.2em]" aria-hidden="true">Modrinth</span>
            </span>
          </span>
        </div>

        <a href="/download" class="group relative px-10 py-5 bg-[#58a6ff] text-black font-bold text-sm tracking-widest uppercase rounded flex items-center gap-3 transition-all hover:scale-[1.02] hover:bg-[#388bfd] overflow-hidden shadow-[0_0_30px_rgba(88,166,255,0.3)]">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out opacity-50"></div>
          <span class="relative z-10">Скачать клиент</span>
          <svg class="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>
    </section>

    <!-- ==========================================
         ЭКРАН 2: МАГИЯ УСТАНОВКИ (Интерактивный терминал)
         ========================================== -->
    <section class="snap-start w-full min-h-screen flex flex-col justify-center relative px-6 lg:px-12 bg-[#04060b] border-t border-[#131b2c] z-10">
      <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 class="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Одна ссылка.<br/><span class="text-slate-500">Один клик.</span>
          </h2>
          <div class="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
            <p>
              Забудь про архивы и ручную установку модов. Мы разработали систему глубоких ссылок.
            </p>
            <div class="flex flex-col gap-6 border-l border-slate-800 pl-6 py-2 mt-4">
              <div>
                <strong class="text-white font-medium block mb-1">Нет лаунчера?</strong>
                <p class="text-sm">Ссылка автоматически скачает Mono и подготовит окружение.</p>
              </div>
              <div>
                <strong class="text-white font-medium block mb-1">Лаунчер установлен?</strong>
                <p class="text-sm">Сборка моментально загрузится и появится в библиотеке.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Визуализация ссылки (Стиль macOS Spotlight / Терминал) -->
        <div class="relative w-full aspect-video flex items-center justify-center bg-[#070b13] border border-[#1f3350] rounded-3xl p-8 overflow-hidden group shadow-2xl shadow-[#58a6ff]/[0.04]">
          <div class="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div class="w-full max-w-md flex flex-col gap-4 relative z-10">
            <div class="w-full bg-[#0a1322] border border-[#1f3350] rounded-xl py-4 px-5 flex items-center gap-3 shadow-xl">
              <svg class="w-5 h-5 text-[#58a6ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <!-- Эффект печатного текста -->
              <div class="font-mono text-sm sm:text-base text-slate-300 flex items-center">
                <span class="text-[#58a6ff]">mono://</span>install?modpack=hardcore
                <span class="w-2 h-5 bg-[#58a6ff] ml-1 animate-pulse"></span>
              </div>
            </div>

            <div class="mx-auto h-8 w-[1px] bg-gradient-to-b from-slate-700 to-transparent"></div>

            <div class="mx-auto bg-[#58a6ff] text-black font-bold uppercase tracking-wide px-8 py-3 rounded-lg shadow-[0_0_30px_rgba(88,166,255,0.35)] transform group-hover:scale-105 transition-transform">
              Сборка установлена
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================
         ЭКРАН 3: ЭКОСИСТЕМА (Bento Box Grid)
         ========================================== -->
    <section class="snap-start w-full min-h-screen flex flex-col justify-center relative px-6 lg:px-12 bg-[#05070c] border-t border-[#131b2c] z-10">
      <div class="max-w-7xl mx-auto w-full">
        <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">Для авторов</h2>
        <p class="text-slate-400 text-lg mb-12 max-w-2xl font-light">Полный контроль над аудиторией, обновлениями и монетизацией.</p>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">

          <!-- Карточка: Boosty (Занимает 2 колонки на десктопе) -->
          <div class="md:col-span-2 p-8 border border-[#1f3350] bg-[#0a1322] rounded-3xl hover:border-[#58a6ff] transition-colors flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#58a6ff]/[0.04] rounded-full blur-2xl group-hover:bg-[#58a6ff]/[0.1] transition-colors"></div>
            <div class="bg-[#58a6ff] text-black text-[10px] font-bold px-3 py-1 rounded w-max uppercase tracking-wider mb-4">Монетизация</div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">Boosty OAuth</h3>
              <p class="text-slate-400 text-sm leading-relaxed max-w-md">Укажи <code>boostyBlog</code> в конфиге. Лаунчер сам проверит подписку через API и пустит в игру только платных подписчиков.</p>
            </div>
          </div>

          <!-- Карточка: Хостинг -->
          <div class="p-8 border border-[#1f3350] bg-[#0a1322] rounded-3xl hover:border-[#58a6ff] transition-colors flex flex-col justify-end">
            <h3 class="text-xl font-bold text-white mb-2">Свой хостинг</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Размещай <code>.mrpack</code> на наших серверах</p>
          </div>

          <!-- Карточка: Кастомизация -->
          <div class="p-8 border border-[#1f3350] bg-[#0a1322] rounded-3xl hover:border-[#58a6ff] transition-colors flex flex-col justify-end">
            <h3 class="text-xl font-bold text-white mb-2">Дизайн</h3>
            <p class="text-slate-400 text-sm leading-relaxed">Файл <code>theme.json</code> полностью перекрасит интерфейс под твой бренд.</p>
          </div>

          <!-- Карточка: Версии и Новости (Занимает 2 колонки) -->
          <div class="md:col-span-2 p-8 border border-[#1f3350] bg-[#0a1322] rounded-3xl hover:border-[#58a6ff] transition-colors flex flex-col justify-between">
            <div class="flex gap-2 mb-4">
              <span class="w-2 h-2 rounded-full bg-slate-600"></span>
              <span class="w-2 h-2 rounded-full bg-slate-600"></span>
              <span class="w-2 h-2 rounded-full bg-slate-600"></span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">Новости и Версии</h3>
              <p class="text-slate-400 text-sm leading-relaxed max-w-lg">Лента релизов модпака подтягивается прямо в клиент. Игроки могут откатывать версии в один клик без переустановки лаунчера.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         ЭКРАН 4: ТОЧНЫЙ МАКЕТ ЛАУНЧЕРА (Ч/Б Эстетика)
         ========================================== -->
    <section class="snap-start w-full min-h-screen flex flex-col justify-center items-center relative px-4 lg:px-8 bg-[#04060b] border-t border-[#131b2c] z-10">

      <div class="text-center mb-10 mt-10">
        <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Интерфейс без компромиссов</h2>
        <p class="text-slate-500 text-base font-light">Всё как в коде: табы, новости, авторизация и метаданные.</p>
      </div>

      <!-- Макет окна (повторяет структуру Mono Launcher) -->
      <div class="w-full max-w-[1100px] h-[650px] bg-[#070b13] border border-[#1f3350] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-[#58a6ff]/[0.04]">

        <!-- Шапка окна -->
        <div class="h-10 border-b border-[#131b2c] flex items-center px-4 justify-between bg-[#060910]">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-slate-800 hover:bg-slate-600 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-slate-800 hover:bg-slate-600 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-slate-800 hover:bg-slate-600 transition-colors"></div>
          </div>
          <div class="text-xs text-slate-600 font-medium">Mono Launcher</div>
          <div class="w-10"></div>
        </div>

        <div class="flex flex-1 overflow-hidden">

          <!-- Сайдбар (Слева) -->
          <div class="w-20 bg-[#090d18] border-r border-[#131b2c] flex flex-col items-center py-4 gap-4 relative z-20">
            <!-- Аккаунт Microsoft -->
            <div class="w-11 h-11 rounded-full bg-[#0a1322] border border-[#1f3350] flex items-center justify-center relative cursor-pointer group">
              <div class="text-slate-400 font-bold text-sm group-hover:text-[#58a6ff] transition-colors">N1</div>
              <div class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#58a6ff] rounded-full border-2 border-[#090d18]" title="Microsoft"></div>
            </div>

            <div class="w-8 h-[1px] bg-slate-800 my-2"></div>

            <!-- Активная сборка -->
            <div class="w-11 h-11 rounded-xl bg-[#58a6ff] border border-[#58a6ff] flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(88,166,255,0.35)]">
              <div class="text-black font-extrabold text-sm">HS</div>
            </div>
            <!-- Другая сборка -->
            <div class="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center cursor-pointer transition-colors">
              <div class="text-slate-500 font-bold text-sm">C2</div>
            </div>

            <div class="flex-1"></div>

            <!-- Каталог / Настройки -->
            <div class="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center cursor-pointer transition-colors">
              <svg class="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div class="w-11 h-11 rounded-xl hover:bg-slate-900 flex items-center justify-center cursor-pointer transition-colors">
              <svg class="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
          </div>

          <!-- Основная область (Страница сборки) -->
          <div class="flex-1 flex flex-col bg-[#070b13] relative">

            <!-- Баннер (Сетка + Градиент) -->
            <div class="h-60 relative border-b border-[#131b2c] flex flex-col justify-end p-8 bg-gradient-to-t from-[#0a1322] to-[#122036]">
              <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f3350_1px,transparent_1px),linear-gradient(to_bottom,#1f3350_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 mask-bottom"></div>

              <!-- Бейджи: Boosty и Часы -->
              <div class="absolute top-6 right-6 flex gap-3">
                <div class="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-[#1f3350] flex items-center gap-2 text-xs font-medium text-slate-300">
                  <div class="w-1.5 h-1.5 rounded-full bg-[#58a6ff] animate-pulse"></div>
                  Boosty: Активен
                </div>
                <div class="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-[#1f3350] text-xs font-medium text-slate-400">
                  124 ч. игры
                </div>
              </div>

              <div class="relative z-10 flex justify-between items-end">
                <div>
                  <div class="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Fabric 1.20.1 • 8GB RAM</div>
                  <h2 class="text-4xl font-extrabold text-white mb-4">Hardcore Survival Pro</h2>
                  <div class="flex gap-2">
                    <button class="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-xs font-bold text-slate-300 transition-colors">Discord</button>
                    <button class="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-xs font-bold text-slate-300 transition-colors">Telegram</button>
                  </div>
                </div>

                <button class="px-12 py-4 bg-[#58a6ff] text-black font-extrabold uppercase tracking-widest rounded transition-all hover:bg-[#388bfd] hover:scale-105 shadow-[0_0_20px_rgba(88,166,255,0.25)]">
                  Играть
                </button>
              </div>
            </div>

            <!-- Табы Лаунчера -->
            <div class="flex items-center gap-8 px-8 border-b border-[#131b2c] bg-[#090d18]">
              <div class="py-4 border-b-2 border-[#58a6ff] text-[#58a6ff] font-semibold text-sm cursor-pointer">Releases</div>
              <div class="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-300 font-medium text-sm cursor-pointer transition-colors">Files</div>
              <div class="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-300 font-medium text-sm cursor-pointer transition-colors">Screenshots</div>
              <div class="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-300 font-medium text-sm cursor-pointer transition-colors">Servers</div>
              <div class="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-300 font-medium text-sm cursor-pointer transition-colors">Console</div>
            </div>

            <!-- Контент Таба: Новости (Releases) -->
            <div class="flex-1 p-8 overflow-auto bg-[#070b13]">
              <div class="bg-[#0a1322] border border-[#1f3350] rounded-xl p-6 max-w-3xl hover:border-[#58a6ff] transition-colors">
                <div class="flex justify-between items-center mb-4">
                  <div class="flex items-center gap-3">
                    <span class="bg-[#58a6ff] text-black px-2 py-0.5 rounded text-xs font-bold">v2.4.1</span>
                    <span class="text-slate-500 text-xs font-mono">Сегодня в 14:00</span>
                  </div>
                  <span class="text-slate-600 text-xs hover:text-[#58a6ff] cursor-pointer transition-colors border-b border-slate-700">Report bug</span>
                </div>
                <h3 class="text-white font-bold text-xl mb-3">Глобальное обновление</h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                  Исправлены критические баги. Лаунчер автоматически сверит хэши файлов через <code>modrinth.index.json</code> перед запуском. Поддержка мультиаккаунтов улучшена.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Плавное движение фоновой сетки */
@keyframes pan-grid {
  0% { transform: translateY(0); }
  100% { transform: translateY(4rem); }
}
.animate-pan-grid {
  animation: pan-grid 15s linear infinite;
}

/* Бегущая строка ресурсов */
.animate-word-roll {
  animation: word-roll 8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes word-roll {
  0%, 25% { transform: translateY(0); }
  33%, 58% { transform: translateY(-1.2em); }
  66%, 91% { transform: translateY(-2.4em); }
  100% { transform: translateY(-3.6em); }
}

/* Плавное затухание для баннера в UI */
.mask-bottom {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

/* Скрываем стандартный скроллбар для эстетики */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
