import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Admin Add New Product
    nameproduct: '',
    product: 0,

    // Start Profile
    editmode: 0,
    email: 'zalikha@gmail.com'
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
    }
  },
  actions: {
  },
  modules: {
  }
})
