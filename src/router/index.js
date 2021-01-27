import Vue from 'vue'
import VueRouter from 'vue-router'

// import Landing from '../views/Landing.vue'
import Landing from '../views/Landing2.vue'

// Auth (Sign Up, Login, Forgot)
import MainAuth from '../views/auth/MainAuth.vue'
import SignUp from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import Forgot from '../views/auth/Forgot.vue'
import newPassword from '../views/auth/newPassword.vue'
// Customer
import Customer from '../views/main/index.vue'
import Product from '../views/main/product/product.vue'
import Cart from '../views/main/cart/cart.vue'
import History from '../views/main/History/history.vue'
import ProductDetail from '../views/customer/ProductDetail.vue'
import Profile from '../views/customer/Profile.vue'
import editPassword from '../views/customer/editPassword.vue'
import HomeCust from '../views/Home/Customer/customer.vue'
// Admin
import Admin from '../views/admin/index.vue'
import NewProduct from '../views/admin/NewProduct.vue'
import ManageOrder from '../views/admin/manage order/manageorder.vue'
import BeforeManageOrder from '../views/admin/manage order/beforemanageorder.vue'
import ProductAdmin from '../views/admin/product/index.vue'
import Dashboard from '../views/admin/dashboard/dashboard.vue'
import HomeAdm from '../views/Home/Admin/admin.vue'
import EditProduct from '../views/admin/EditProduct.vue'
// import EditPasswordAdmin from '../views/customer/editPassword.vue'

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
		meta: { requiresVisitor: true },
		children: [
			{
				path: 'signup',
				name: 'SignUp',
				component: SignUp,
				meta: { requiresVisitor: true }
			},
			{
				path: 'login',
				name: 'Login',
				component: Login,
				meta: { requiresVisitor: true }
			},
			{
				path: 'forgot',
				name: 'Forgot',
				component: Forgot,
				meta: { requiresVisitor: true }
			},
			{
				path: 'new-password/:token',
				name: 'newPassword',
				component: newPassword,
				meta: { requiresVisitor: true }
			}
		]
	},
	{
		path: '/cust',
		name: 'Customer',
		component: Customer,
		redirect: '/cust/product',
		meta: { requiresAuth: true },
		children: [
			{
				path: 'product-d',
				name: 'ProductDetail',
				component: ProductDetail,
				meta: { requiresAuth: true }
			},
			{
				path: 'profile',
				name: 'Profile',
				component: Profile,
				meta: { requiresAuth: true }
			},
			{
				path: 'product',
				name: 'Product',
				component: Product,
				meta: { requiresAuth: true }
			},
			{
				path: 'cart',
				name: 'Cart',
				component: Cart,
				meta: { requiresAuth: true }
			},
			{
				path: 'history',
				name: 'History',
				component: History,
				meta: { requiresAuth: true }
			},
			{
				path: 'edit-password',
				name: 'editPassword',
				component: editPassword,
				meta: { requiresAuth: true }
			},
			{
				path: 'home',
				name: 'HomeCust',
				component: HomeCust,
				meta: { requiresAuth: true }
			}
		]
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		redirect: '/admin/dashboard',
		meta: { requiresAuth: true },
		children: [
			{
				path: 'edit-password',
				name: 'EditPasswordAdmin',
				component: editPassword,
				meta: { requiresAuth: true }
			},
			{
				path: 'profile',
				name: 'AdminProfile',
				component: Profile,
				meta: { requiresAuth: true }
			},
			{
				path: 'add-product',
				name: 'NewProduct',
				component: NewProduct,
				meta: { requiresAuth: true }
			},
			{
				path: 'manage-order',
				name: 'ManageOrder',
				component: ManageOrder,
				meta: { requiresAuth: true }
			},
			{
				path: 'bmanage-order',
				name: 'BeforeManageOrder',
				component: BeforeManageOrder,
				meta: { requiresAuth: true }
			},
			{
				path: 'product-admin',
				name: 'ProductAdmin',
				component: ProductAdmin,
				meta: { requiresAuth: true }
			},
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: Dashboard,
				meta: { requiresAuth: true }
			},
			{
				path: 'edit-product',
				name: 'EditProduct',
				component: EditProduct,
				meta: { requiresAuth: true }
			},
			{
				path: 'home',
				name: 'HomeAdm',
				component: HomeAdm,
				meta: { requiresAuth: true }
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!localStorage.getItem('token')) {
			next({
				path: '/auth/login'
			})
		} else {
			next()
		}
	} else if (to.matched.some(record => record.meta.requiresVisitor)) {
		const roleId = localStorage.getItem('role_id')
		if (localStorage.getItem('token') && roleId === '1') {
			next({
				path: '/admin/dashboard'
			})
		} else if (localStorage.getItem('token') && roleId === '2') {
			next({
				path: '/cust/product'
			})
		} else {
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
})

export default router
