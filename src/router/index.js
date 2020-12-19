import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'

// Auth (Sign Up, Login, Forgot)
import MainAuth from '../views/auth/MainAuth.vue'
import SignUp from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import Forgot from '../views/auth/Forgot.vue'
import newPassword from '../views/auth/newPassword.vue'
// Customer
import Customer from '../views/customer/MainCust.vue'
import ProductDetail from '../views/customer/ProductDetail.vue'
import Profile from '../views/customer/Profile.vue'
import editPassword from '../views/customer/editPassword.vue'
// Admin
import Admin from '../views/admin/MainAdmin.vue'
import NewProduct from '../views/admin/NewProduct.vue'

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
      },
      {
        path: 'new-password',
        name: 'newPassword',
        component: newPassword
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
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'edit-password',
        name: 'editPassword',
        component: editPassword
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'add-product',
        name: 'NewProduct',
        component: NewProduct
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
