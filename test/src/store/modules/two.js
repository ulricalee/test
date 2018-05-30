const state = {
  twoJ: '2',
  twoList: ['two 1', 'two 2', 'two 3']
}

const getters = {
  getTwoList: (state, getters, rootState) => {
    return state.twoList
  }
}

export default {
  state,
  getters
}
