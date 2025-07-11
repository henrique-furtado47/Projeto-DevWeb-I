import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vitoria',
      name: 'vitoria',
      component: () => import('../views/VitoriaView.vue'),
    },
    {
      path: '/derrota',
      name: 'derrota',
      component: () => import('../views/DerrotaView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/numeros',
      name: 'numeros',
      component: () => import('../views/NumerosView.vue'),
    },
    {
      path: '/letras',
      name: 'letras',
      component: () => import('../views/LetrasView.vue'),
    },
    {
      path: '/formas',
      name: 'formas',
      component: () => import('../views/FormasView.vue'),
    },
    {
      path: '/cores',
      name: 'cores',
      component: () => import('../views/CoresView.vue'),
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/TutorialView.vue'),
    },
  ],
})

export default router
