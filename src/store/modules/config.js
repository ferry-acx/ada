import { make } from 'vuex-pathify'

const state = {
  list: [],
  active: {
    gender: ''
  }
}

export default {
  namespaced: true,
  state,
  getters: make.getters(state),
  mutations: make.mutations(state),
  actions: {
    ...make.actions(state),
    setConfigActive ({ commit, state }, active) {
      commit('SET_ACTIVE', active)
    }
  }
}
