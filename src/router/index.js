import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Electronics from '../views/Electronics.vue'
import vMujer from '@/views/vMujer.vue'
import vHombre from '@/views/vHombre.vue'
import CheckOut from '@/views/CheckOutview.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import CarritoView from '@/views/CarritoView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/electronicos',
    name:'electronicos',
    component: Electronics,
  },
  {
    path: '/vestuariomujer',
    name:'v-mujer',
    component: vMujer,
  },
  {
    path: '/vestuariohombre',
    name:'v-hombre',
    component: vHombre,
  },
  {
    path: '/carrito',
    name:'carrito',
    component: CarritoView,
  },
  {
    path: '/checkout',
    name:'checkout',
    component: CheckOut,
  },
  {
    path: '/:pathMatch(.*)*',
    name:'not-found',
    component: PageNotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
