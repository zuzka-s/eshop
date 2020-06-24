import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: {
      "mindok-azul": 5,
      "mindok-kronika-zlocinu": 10
    }
  },
  getters: {
    countProducts (state) {
      return Object.keys(state.itemsInCart).length
    },
    countItems (state) {
      let result = 0
      Object.values(state.itemsInCart).forEach((value) => result += value)
      return result
    },
    countProductItems (state) {
      return function (productId) {
        return state.itemsInCart[productId] || 0
      }
    },
    listOfProductsInCart (state) {
      return Object.keys(state.itemsInCart)
    },
    ProductsInCartEachCount (state) {
      return Object.values(state.itemsInCart)
    }
  },
  mutations: {
    setCartItemQuantity (state, {productId, quantity}) {
      if (quantity > 0) {
        Vue.set(state.itemsInCart, productId, quantity)
      } else {
        Vue.delete(state.itemsInCart, productId)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
