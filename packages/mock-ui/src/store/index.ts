import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state) {
      state.loading = true
    },
    cancelLoading(state) {
      state.loading = false
    }
  },
  getters: {
    loading(state) {
      return state.loading
    }
  },
  actions: {
  },
  modules: {
  }
})
