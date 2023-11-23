import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'login-page',
        component: () => import('src/pages/login-page.vue')
      },
      {
        path: '/home',
        name: 'home-page',
        component: () => import('src/pages/home-page.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error-not-found.vue')
  }
]

export default routes
