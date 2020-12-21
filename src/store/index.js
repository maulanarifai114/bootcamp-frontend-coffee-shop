import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Admin Add New Product
    nameproduct: '',
    product: 0,

    // Customer Profile
    editmode: 0,
    email: 'zalikha@gmail.com',
    gender: '',

    // Add to cart
    checkoutdine: [],
    checkoutdoor: [],
    checkoutpick: [],
    // History Products
    history: []
  },
  mutations: {
    changeEditMode (state) {
      if (state.editmode === 0) {
        state.editmode++
      }
    },
    changeStaticMode (state) {
      if (state.editmode === 1) {
        state.editmode--
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
        axios.get('http://54.227.187.8:5000/api/history', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
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
    deleteHistory (context, { deleteProducts }) {
      return new Promise((resolve, reject) => {
        console.log('abcd')
        console.log(deleteProducts)
        axios.delete('http://54.227.187.8:5000/api/history/delete-history',
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
    }
  },
  getters: {
    getHistory (state) {
      return state.history
    }
  },
  modules: {
  }
})
