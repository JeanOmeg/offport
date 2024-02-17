import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/layout-deslogado.vue'),
    children: [{ path: '', name: 'login-page', component: () => import('src/pages/login/login-page.vue') }]
  },
  {
    path: '/visitantes',
    component: () => import('src/layouts/layout-padrao.vue'),
    children: [{ path: '', name: 'visitantes', component: () => import('src/pages/visitantes/visitantes.vue') }]
  },
  {
    path: '/controladores',
    component: () => import('src/layouts/layout-padrao.vue'),
    children: [{ path: '', name: 'controladores', component: () => import('src/pages/controladores/controladores.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/error-not-found.vue')
  }
]

export default routes
