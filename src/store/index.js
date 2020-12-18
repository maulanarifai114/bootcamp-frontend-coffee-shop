import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: 0,

    // Start Profile
    editmode: 0,
    email: 'zalikha@gmail.com'
  },
  mutations: {
    changeEditMode (state) {
      if (state.editmode === 0) {
        state.editmode++
      } else if (state.editmode > 0) {
        state.editmode--
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
