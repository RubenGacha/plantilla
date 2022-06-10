export const logica=[
  {
    path: '/logica/introduccion',
    name: 'logica_introduccion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/logica/introduccion.vue')
  }
]