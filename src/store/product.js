import axios from 'axios'
import router from '../router/router'

export default {
  namespaced: true,
  state: {
    products: [],
    product:{         // 暫存查看單筆商品詳細資料
      category: {
        brand: '',
        type: ''
      }
    },           
    pageLimit: 10,        // 單頁資料筆數
    // searchFilter: '',     // 搜尋商品
    isPageLoading: false,
  },
  getters: {
    enabledProducts(state){
      return state.products.filter( ({is_enabled}) => is_enabled === 1)
    },
    onSaleProducts(state, getters){
      return getters.enabledProducts.filter(
        ({origin_price, price}) => origin_price !== price
      )
    },
    brandCategoryFilter(state, getters){
      const set = getters.enabledProducts.reduce(
        (set, { category: { brand } }) => set.add(brand)
      , new Set())
      return [ ...set ]
    },
    typeCategoryFilter(state, getters){
      const set = getters.enabledProducts.reduce(
        (set, { category: { type } }) => set.add(type)
      , new Set())
      return [ ...set ]
    },
  },
  mutations: {
    setProduct(state, data){
      state.product = data
    },
    setProducts(state, data){
      state.products = data
    },
    setPageLimit(state, value){
      state.pageLimit = value
    },
    setSearchFilter(state, value){
      state.searchFilter = value
    },
    setPageLoading(state, boolean){
      state.isPageLoading = boolean
    }
  },
  actions: {
    getProducts({commit}){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/products/all
      `
      commit('setPageLoading', true)
      axios.get(API)
        .then( ({data}) => {
          console.log('getProducts', data)        

          commit('setProducts', data.products)
          commit('setPageLoading', false)
        })
        .catch(err => {
          console.error(err)
          commit('setPageLoading', false)
        })
    },
    getProduct({commit, dispatch}, id){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/product/${id}
      `
      commit('setPageLoading', true)
      // 因為可能產品未啟用所以才這樣寫
      return new Promise((resolve, reject) => {
        axios.get(API)
          .then( ({data}) => {
            console.log(data)

            commit('setPageLoading', false)
            if(data.success){
              commit('setProduct', data.product)
              resolve()
            }else{
              commit('setProduct', {})
              dispatch('alert/updateMessage', {
                message: data.message,
                status: 'danger'
              }, {root: true})
              reject(data.message)
            }
          })
          .catch(err => {
            commit('setProduct', {})
            commit('setPageLoading', false)
            reject(err)
          })
      })
    },
    addToCart({dispatch}, data){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/cart
      `

      return axios.post(API, { data })
        .then( ({data}) => {
          console.log(data)

          dispatch('alert/updateMessage', {
            message: data.message,
            status: data.success === true
              ? 'success'
              : 'danger'
          }, { root: true})

          // 要給按鈕判斷啟用，因此拿到productDetail組件內then來dispatch
          // dispatch('cart/getCart', null, { root: true } )
        })
        .catch(err => console.error(err))
    },
    searchProducts(context, value){
      router.push({
        path: '/shopping/search',
        query: {
          search: value,
          page: 1
        }
      })
    }
  }
}