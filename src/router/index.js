import Vue from 'vue'
import VueRouter from 'vue-router'
import Customer from '../views/main/index.vue'
import Product from '../views/main/product/product.vue'
import Cart from '../views/main/cart/cart.vue'
import History from '../views/main/History/history.vue'
import Admin from '../views/admin/index.vue'
import ManageOrder from '../views/admin/manage order/manageorder.vue'
import ProductAdmin from '../views/admin/product/index.vue'
import Dashboard from '../views/admin/dashboard/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cust',
    name: 'Customer',
    component: Customer,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'history',
        name: 'History',
        component: History
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'manage-order',
        name: 'ManageOrder',
        component: ManageOrder
      },
      {
        path: 'product',
        name: 'ProductAdmin',
        component: ProductAdmin
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
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
