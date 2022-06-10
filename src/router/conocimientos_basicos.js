export const conocimientos_basicos=[
  {
    path: '/presentacion',
    name: 'presentacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/presentacion.vue')
  },{
    path: '/regex',
    name: 'regex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/regex.vue')
  },{
    path: '/lenguajes_programacion',
    name: 'lenguajes_programacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/lenguajes_programacion.vue')
  },{
    path: '/razonamiento_aprendizaje',
    name: 'razonamiento_aprendizaje',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/razonamiento_aprendizaje.vue')
  },{
    path: '/agentes_inteligentes',
    name: 'agentes_inteligentes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/agentes_inteligentes.vue')
  },{
    path: '/complejidad_tratabilidad',
    name: 'complejidad_tratabilidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/conocimientos_basicos/complejidad_tratabilidad.vue')
  },
]