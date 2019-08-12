const state = {
  login: true,
  userName: 'liuxuezhen'
}

const getters = {
  getLoginState(state) {
    return state.login
  }
}

const mutations = {
  changeLoginState(state, s) {
    state.login = s
  }
}

export default {
  state,
  getters,
  mutations
}
