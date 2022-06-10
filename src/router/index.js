import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {conocimientos_basicos} from '@/router/conocimientos_basicos.js'
import {busqueda_grafos} from '@/router/busqueda_grafos.js'
import {probabilidad} from '@/router/probabilidad.js'
import {logica} from '@/router/logica.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  ...conocimientos_basicos,
  ...busqueda_grafos,
  ...probabilidad,
  ...logica,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
