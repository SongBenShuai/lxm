import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/index')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
