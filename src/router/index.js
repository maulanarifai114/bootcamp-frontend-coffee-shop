import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
import Product from '../views/main/product/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
