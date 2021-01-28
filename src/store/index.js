import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		allCheckout: [],
		checkoutDineIn: {
			products: [],
			delivery_method: 'dine in',
			delivery_time: ''
		},
		checkoutHomeDelivery: {
			products: [],
			delivery_method: 'home delivery',
			delivery_time: ''
		},
		checkoutTakeAway: {
			products: [],
			delivery_method: 'take away',
			delivery_time: ''
		},
		detailP: {
			id: 0,
			img: '',
			name: '',
			description: '',
			amount: 0,
			price: 0,
			priceMid: 0,
			priceHigh: 0,
			deliver: '',
			now: 'yes',
			date: '',
			size: []
		},
		sizeProduct: '',
		nameproduct: '',
		product: 0,
		order_id: 0,

		// Customer Profile
		editmode: 0,
		// email: 'zalikha@gmail.com',
		// gender: '',

		// Add to cart
		checkoutdine: [],
		checkoutdoor: [],
		checkoutpick: [],
		// History Products
		history: [],

		// Profile
		profile: {
			gender: 'male'
		},
		manageorderid: {},
		allmanageorder: []
	},
	mutations: {
		SET_ORDER_ID (state, payload) {
			state.order_id = payload
		},
		RESET_ORDER_ID (state) {
			state.order_id = 0
		},
		RESET_ALL_CHECKOUT (state, payload) {
			state.allCheckout.forEach((item, index) => {
				if (item.qtyR || item.qtyL || item.qtyXL) {
					if (item.delivery_method === payload) {
						item.delivery_method = ''
						item.img = ''
						item.name = ''
						item.product_id = 0
						item.qtyR = 0
						item.qtyL = 0
						item.qtyXL = 0
					}
				} else if (item.qty250 || item.qty300 || item.qty500) {
					if (item.delivery_method === payload) {
						item.delivery_method = ''
						item.img = ''
						item.name = ''
						item.product_id = 0
						item.qty250 = 0
						item.qty300 = 0
						item.qty500 = 0
					}
				}
			})
		},
		RESET_CART_DINE_IN (state) {
			state.checkoutDineIn.products = []
			state.checkoutDineIn.delivery_method = 'dine in'
			state.checkoutDineIn.delivery_time = ''
		},
		RESET_CART_HOME_DELIVERY (state) {
			state.checkoutHomeDelivery.products = []
			state.checkoutHomeDelivery.delivery_method = 'home delivery'
			state.checkoutHomeDelivery.delivery_time = ''
		},
		RESET_CART_PICK_UP (state) {
			state.checkoutTakeAway.products = []
			state.checkoutTakeAway.delivery_method = 'take away'
			state.checkoutTakeAway.delivery_time = ''
		},
		SET_ALL_CART (state, payload) {
			// Regular, Large, Xtra Large
			const dataSizeReg = {
				name: state.detailP.name,
				img: state.detailP.img,
				product_id: state.detailP.id,
				qtyR: payload.qtyR,
				qtyL: payload.qtyL,
				qtyXL: payload.qtyXL,
				delivery_method: state.detailP.deliver
			}
			// 250 gram, 300 gram, 500 gram
			const dataSizeGram = {
				name: state.detailP.name,
				img: state.detailP.img,
				product_id: state.detailP.id,
				qty250: payload.qty250,
				qty300: payload.qty300,
				qty500: payload.qty500,
				delivery_method: state.detailP.deliver
			}
			console.log(dataSizeReg)
			console.log(dataSizeGram)
			if (state.allCheckout.length === 0) {
				if (state.sizeProduct === 'R') {
					state.allCheckout.push(dataSizeReg)
				} else if (state.sizeProduct === 'L') {
					state.allCheckout.push(dataSizeReg)
				} else if (state.sizeProduct === 'XL') {
					state.allCheckout.push(dataSizeReg)
				} else if (state.sizeProduct === '250') {
					state.allCheckout.push(dataSizeGram)
				} else if (state.sizeProduct === '300') {
					state.allCheckout.push(dataSizeGram)
				} else if (state.sizeProduct === '500') {
					state.allCheckout.push(dataSizeGram)
				}
			} else if (state.allCheckout.length > 0) {
				const checkId = state.allCheckout.findIndex(item => item.product_id === payload.product_id)
				if (checkId === -1) {
					if (state.sizeProduct === 'R') {
						state.allCheckout.push(dataSizeReg)
					} else if (state.sizeProduct === 'L') {
						state.allCheckout.push(dataSizeReg)
					} else if (state.sizeProduct === 'XL') {
						state.allCheckout.push(dataSizeReg)
					} else if (state.sizeProduct === '250') {
						state.allCheckout.push(dataSizeGram)
					} else if (state.sizeProduct === '300') {
						state.allCheckout.push(dataSizeGram)
					} else if (state.sizeProduct === '500') {
						state.allCheckout.push(dataSizeGram)
					}
				} else {
					if (state.sizeProduct === 'R') {
						state.allCheckout[checkId].qtyR += payload.qtyR
					} else if (state.sizeProduct === 'L') {
						state.allCheckout[checkId].qtyL += payload.qtyL
					} else if (state.sizeProduct === 'XL') {
						state.allCheckout[checkId].qtyXL += payload.qtyXL
					} else if (state.sizeProduct === '250') {
						state.allCheckout[checkId].qty250 += payload.qty250
					} else if (state.sizeProduct === '300') {
						state.allCheckout[checkId].qty300 += payload.qty300
					} else if (state.sizeProduct === '500') {
						state.allCheckout[checkId].qty500 += payload.qty500
					}
				}
			}
		},
		DELETE_PRODUCT_DETAIL (state) {
			state.detailP.id = 0
			state.detailP.img = ''
			state.detailP.name = ''
			state.detailP.description = ''
			state.detailP.amount = 0
			state.detailP.price = 0
			state.detailP.priceMid = 0
			state.detailP.priceHigh = 0
			state.detailP.deliver = ''
			state.detailP.now = 'yes'
			state.detailP.date = ''
			state.detailP.size = []
			state.sizeProduct = ''
		},
		SET_PRODUCT_DETAIL (state, payload) {
			state.detailP = { ...payload }
		},
		SET_SIZE (state, payload) {
			state.sizeProduct = payload
		},
		// Dine In
		SET_CHECKOUT_DINE_IN (state, payload) {
			state.checkoutDineIn.products.push(payload)
		},
		SET_QTY_DINE_IN (state, payload) {
			state.checkoutDineIn.products[payload.checkId].qty += payload.qtyNew
		},
		// Home Delivery
		SET_CHECKOUT_HOME_DEL (state, payload) {
			state.checkoutHomeDelivery.products.push(payload)
		},
		SET_QTY_HOME_DEL (state, payload) {
			state.checkoutHomeDelivery.products[payload.checkId].qty += payload.qtyNew
		},
		// Pick Up
		SET_CHECKOUT_PICK_UP (state, payload) {
			state.checkoutTakeAway.products.push(payload)
		},
		SET_QTY_PICK_UP (state, payload) {
			state.checkoutTakeAway.products[payload.checkId].qty += payload.qtyNew
		},
		// Delivery
		SET_DELIVERY (state, payload) {
			state.detailP.deliver = payload.deliver
			state.detailP.now = payload.now
			state.detailP.date = payload.date
			state.checkoutDineIn.delivery_time = payload.date
			state.checkoutHomeDelivery.delivery_time = payload.date
			state.checkoutTakeAway.delivery_time = payload.date
		},
		SET_AMOUNT_PLUS (state) {
			state.detailP.amount++
		},
		SET_AMOUNT_MINUS (state) {
			if (state.detailP.amount > 0) {
				state.detailP.amount--
			}
		},
		changeEditMode (state) {
			if (state.editmode === 0) {
				state.editmode = 1
			}
		},
		changeStaticMode (state) {
			if (state.editmode === 1) {
				state.editmode = 0
			}
		},
		addProduct (state, payload) {
			state.nameproduct = payload.name
		},
		changeGender (state, payload) {
			state.gender = payload
		},
		addCheckout (state, payload) {
			state.checkout.push(payload)
		},
		SET_HISTORY (state, payload) {
			state.history = payload
		},
		SET_PROFILE (state, payload) {
			state.profile = payload
		},
		SET_MANAGEORDERID (state, payload) {
			state.manageorderid = payload
		},
		SET_ALLMANAGEORDER (state, payload) {
			state.allmanageorder = payload
		}
	},
	actions: {
		interceptorRequest (context) {
			axios.interceptors.request.use(function (config) {
				config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
				return config
			}, function (error) {
				return Promise.reject(error)
			})
		},
		interceptorResponse (context) {
			axios.interceptors.response.use(function (response) {
				return response
			}, function (error) {
				console.log(error.response)
				if (error.response.status === 401) {
					if (error.response.data.messages === 'invalid token') {
						localStorage.removeItem('token')
						localStorage.removeItem('id')
						localStorage.removeItem('role_id')
						this.$router.push('/auth/login')
					} else if (error.response.data.messages === 'Token Expired') {
						localStorage.removeItem('token')
						localStorage.removeItem('id')
						localStorage.removeItem('role_id')
						this.$router.push('/auth/login')
					}
				}
				return Promise.reject(error)
			})
		},
		getAllHistory (context) {
			return new Promise((resolve, reject) => {
				axios.get(`${process.env.VUE_APP_BASE_URL}history`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						console.log(res.data.data)
						context.commit('SET_HISTORY', res.data.data)
						resolve(res.data.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		getAllManageOrder (context) {
			return new Promise((resolve, reject) => {
				axios.get(`${process.env.VUE_APP_BASE_URL}order/all`)
					.then((res) => {
						console.log(res.data.data)
						context.commit('SET_ALLMANAGEORDER', res.data.data)
						resolve(res.data.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		deleteHistory (context, { deleteProducts }) {
			return new Promise((resolve, reject) => {
				console.log(deleteProducts)
				axios.delete(`${process.env.VUE_APP_BASE_URL}history/delete-history`,
					{ data: { order_detail_ids: deleteProducts } }
				)
					.then((res) => {
						console.log(deleteProducts)
						resolve(res.data.data)
					})
					.catch((err) => {
						console.log(err.response)
						reject(err)
					})
			})
		},
		getCustProfile (context) {
			return new Promise((resolve, reject) => {
				axios.get(`${process.env.VUE_APP_BASE_URL}user/detail`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						context.commit('SET_PROFILE', res.data.data)
						resolve(res.data.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		getManageOrderId (context) {
			return new Promise((resolve, reject) => {
				axios.get(`${process.env.VUE_APP_BASE_URL}order/detail-order/${localStorage.getItem('allorderid')}`)
					.then((res) => {
						console.log(res.data.data)
						context.commit('SET_MANAGEORDERID', res.data.data)
						resolve(res.data.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		updateProfile ({ context, payload }, { email, username, firstName, lastName, address, phone, gender, bod }) {
			return new Promise((resolve, reject) => {
				axios.patch(`${process.env.VUE_APP_BASE_URL}user/edit-profile`, {
					email: email,
					username: username,
					first_name: firstName,
					last_name: lastName,
					address: address,
					phone_number: phone,
					gender: gender,
					bod: bod
				},
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						console.log(res.data.data)
						resolve(res.data.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		markAsDone ({ context, payload }, { orderId }) {
			console.log(orderId)
			return new Promise((resolve, reject) => {
				axios.patch(`${process.env.VUE_APP_BASE_URL}order/done`, { order_id: orderId }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						localStorage.removeItem('allorderid')
						resolve(res.data.data)
					})
					.catch((err) => {
						console.log(err.response.data.messages)
						reject(err)
					})
			})
		},
		updateImage (context, file) {
			return new Promise((resolve, reject) => {
				console.log('kebaca?')
				axios.patch(`${process.env.VUE_APP_BASE_URL}user/update-image`, file, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						Swal.fire(
							'Success!',
							'Your profile has been updated'
						)
						context.dispatch('getCustProfile')
						resolve(res.data.result)
					})
					.catch((err) => {
						Swal.fire(
							'Error!',
							err.response.data.message
						)
						reject(err)
					})
			})
		},
		deleteImage (context, payload) {
			return new Promise((resolve, reject) => {
				axios.delete(`${process.env.VUE_APP_BASE_URL}user/delete-image`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
					.then((res) => {
						resolve(res.data)
					})
					.catch((err) => {
						reject(err)
					})
			})
		}
	},
	getters: {
		getOrderId (state) {
			return state.order_id
		},
		getName (state) {
			return state.profile.first_name
		},
		getAddress (state) {
			return state.profile.address
		},
		getPhone (state) {
			return state.profile.phone_number
		},
		getProductDine (state) {
			return state.checkoutDineIn
		},
		getProductHome (state) {
			return state.checkoutHomeDelivery
		},
		getProductPick (state) {
			return state.checkoutTakeAway
		},
		getAllCart (state) {
			return state.allCheckout
		},
		getHistory (state) {
			return state.history
		},
		getProfile (state) {
			return state.profile
		},
		currentPrice (state) {
			if (state.sizeProduct === 'R' || state.sizeProduct === '250') {
				const price = state.detailP.price
				const amount = state.detailP.amount
				const current = price * amount
				return current.toLocaleString('id-ID')
			} else if (state.sizeProduct === 'L' || state.sizeProduct === '300') {
				const priceMid = state.detailP.priceMid
				const amount = state.detailP.amount
				const current = priceMid * amount
				return current.toLocaleString('id-ID')
			} else if (state.sizeProduct === 'XL' || state.sizeProduct === '500') {
				const priceHigh = state.detailP.priceHigh
				const amount = state.detailP.amount
				const current = priceHigh * amount
				return current.toLocaleString('id-ID')
			}
		},
		getManageOrderId (state) {
			return state.manageorderid
		},
		getAllManageOrder (state) {
			return state.allmanageorder
		}
	},
	modules: {
	}
})
