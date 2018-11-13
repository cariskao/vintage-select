import axios from 'axios'

export default {
  namespaced: true,
  state: {
    checkoutOrder: {
      user: {},
      products: []
    },
    isPageLoading: false
  },
  mutations: {
    setCheckoutOrder(state, order){
      state.checkoutOrder = order
    },
    setPageLoading(state, boolean){
      state.isPageLoading = boolean
    }
  },
  actions: {
    getOrder({commit}, orderId){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/order/${orderId}
      `
      commit('setPageLoading', true)
      axios.get(API)
        .then( ({data}) => {
          console.log(data)

          commit('setCheckoutOrder', data.order)
          commit('setPageLoading', false)
        })
        .catch(err => {
          console.error(err)
          commit('setPageLoading', false)
        })
    },
    payOrder({commit, dispatch}, orderId){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/pay/${orderId}
      `
      commit('setPageLoading', true)
      axios.post(API)
        .then( ({data}) => {
          console.log(data)

          if(data.success){
            dispatch('getOrder', orderId)
          }
          commit('setPageLoading', false)
        })
        .catch(err => {
          console.error(err)
          commit('setPageLoading', false)
        })
    }
  }
}