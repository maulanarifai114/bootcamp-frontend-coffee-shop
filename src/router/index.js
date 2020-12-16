import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

// Auth (Sign Up, Login, Forgot)
import MainAuth from '../views/auth/MainAuth.vue'
import SignUp from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import Forgot from '../views/auth/Forgot.vue'

// Customer
import Customer from '../views/customer/MainCust.vue'
import ProductDetail from '../views/customer/ProductDetail.vue'

// Admin

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/auth',
    name: 'MainAuth',
    component: MainAuth,
    redirect: '/auth/signup',
    children: [
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: Forgot
      }
    ]
  },
  {
    path: '/cust',
    name: 'Customer',
    component: Customer,
    children: [
      {
        path: 'product-d',
        name: 'ProductDetail',
        component: ProductDetail
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
