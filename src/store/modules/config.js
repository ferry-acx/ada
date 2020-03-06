import { make } from 'vuex-pathify'

const state = {
  list: [],
  active: {
    gender: 'm'
  }
}

export default {
  namespaced: true,
  state,
  getters: make.getters(state),
  mutations: make.mutations(state),
  actions: make.actions(state)
}
