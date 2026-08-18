import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import('../views/Invite.vue'),
  },
  // Любой другой путь (глубокие ссылки, старые ?url= форматы) — на главную.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})