const state = {
  goodsNum: 0,
  goodsCount: 0
}

const getters = {
  goodsNum(state) {
    return state.goodsNum
  },
  goodsCount(state) {
    return state.goodsCount
  }
}

const mutations = {
  updateItemQuantity(state, num) {
    state.goodsNum += num
  },
  updateItemtotalPrices(state, total) {
    state.goodsCount += total
  },
  setItemInfo(state, payload) {
    state.goodsNum = payload.num
    state.goodsCount = payload.total
  }
}

export default {
  state,
  getters,
  mutations
}
