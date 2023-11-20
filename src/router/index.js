import Vue from 'vue'
import VueRouter from 'vue-router'
import Charts from '../views/Charts.vue'
import Flexbox from '@/views/Flexbox.vue'
import MarketPlace from '@/views/MarketPlace.vue'
import Likeuber from '@/views/Likeuber.vue'
import Rental from '@/views/Rental.vue'
import CarRental from '@/views/CarRental.vue'
import Ecommerce from '@/views/Ecommerce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Flexbox',
    component: Flexbox
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/marketplace',
    name: "Marketplace",
    component: MarketPlace
  },
  {
    path: '/likeuber',
    name: "Likeuber",
    component: Likeuber
  },
  {
    path: '/rental',
    name: "Rental",
    component: Rental
  },
  {
    path: '/car-rental',
    name: "CarRentl",
    component: CarRental
  },
  {
    path: '/ecommerce',
    name: "Ecommerce",
    component: Ecommerce
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
