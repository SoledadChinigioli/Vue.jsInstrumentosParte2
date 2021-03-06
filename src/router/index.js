import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/producto',
    name: 'producto',
    component: () => import('../views/Producto.vue')
  },
  {
    path: '/editFormulario/:id',
    name: 'editFormulario',
    component: () => import('../views/EditFormulario.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue')
  },

  {
    path: '/destino',
    name: 'destino',
    component: () => import('../views/Destino.vue')
  },
  {
    path: '/detalle/:id',
    name: 'DetalleInstrumento',
    component: () => import('../views/DetalleInstrumento.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
