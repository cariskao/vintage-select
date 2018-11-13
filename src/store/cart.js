import axios from 'axios'
import router from '../router/router'

export default {
  namespaced: true,
  state: {
    cart: {
      carts: []
    },
    isPageLoading: false,
  },
  mutations: {
    setCart(state, cart){
      state.cart = cart
    },
    setPageLoading(state, boolean){
      state.isPageLoading = boolean
    }
  },
  actions: {
    getCart({commit}){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/cart
      `
      commit('setPageLoading', true)
      axios.get(API)
        .then( ({data}) => {
          console.log('購物車資訊', data.data)
          commit('setCart', data.data)
          commit('setPageLoading', false)
        })
        .catch(err => {
          console.error(err)
          commit('setPageLoading', false)
        })
    },
    deleteCartItem({dispatch}, cartItemId){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/cart/${cartItemId}
      `
      return axios.delete(API)
        .then( ({data}) => {

          dispatch('alert/updateMessage', {
            message: data.message,
            status: data.success === true
              ? 'success'
              : 'danger'
          }, { root: true})

          dispatch('getCart')
        })
        .catch(err => console.error(err))
    },
    useCoupon({dispatch}, couponCode){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/coupon
      `
      const coupon = {
        code: couponCode
      }

      return axios.post(API, { data: coupon } )
        .then( ({data}) => {
          console.log(data)
          
          dispatch('alert/updateMessage', {
            message: data.message,
            status: data.success === true
              ? 'success'
              : 'danger'
          }, { root: true})

          if(data.success){
            dispatch('getCart')
          }
        })
        .catch(err => console.error(err))
    },
    createOrder({commit, dispatch}, order){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/order
      `
      commit('setPageLoading', true)
      return axios.post(API, {data: order} )
        .then( ({data}) => {
          console.log(data)

          commit('setPageLoading', false)

          dispatch('alert/updateMessage', {
            message: data.message,
            status: data.success === true
              ? 'success'
              : 'danger'
          }, { root: true})

          if(data.success){
            router.push(`/simulate_order/${data.orderId}`)
          }
        })
        .catch(err => console.error(err))
    }
  }
}