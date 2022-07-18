import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/layout',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
