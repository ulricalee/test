const state = {
  oneJ: '1',
  store_list: [4, 5, 6]
}

const getters = {
  getList: (state, getters, rootState) => {
    return state.store_list
  },
  doubleList: (state, getters, rootState) => {
    let t = state.store_list.map(item => {
      return item * 2
    })
    return t
  }
}

const actions = {
  actAdd ({ commit, state }, products) {
    commit('addOne', products)
    // commit('setCartItems', null)
  }
}

const mutations = {
  addOne (state, { num }) {
    state.oneJ = state.oneJ + (num || '2')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
