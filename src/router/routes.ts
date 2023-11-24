import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/layout-deslogado.vue'),
    children: [{ path: '', name: 'login-page', component: () => import('src/pages/login-page.vue') }]
  },
  {
    path: '/inicio',
    component: () => import('src/layouts/layout-padrao.vue'),
    children: [{ path: '', name: 'home-page', component: () => import('src/pages/home-page.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error-not-found.vue')
  }
]

export default routes
