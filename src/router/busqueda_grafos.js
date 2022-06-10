export const  busqueda_grafos=[
  {
    path: '/busqueda_grafos/introduccion',
    name: 'busqueda_grafos_introduccion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/busqueda_grafos/introduccion.vue')
  }
]