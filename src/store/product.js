import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: [],
    product:{},
    pagination: {},
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
    setPagination(state, pagination){
      state.pagination = pagination
    },
    setPageLoading(state, boolean){
      state.isPageLoading = boolean
    }
  },
  actions: {
    getProducts({commit}, page = 1){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/products?page=${page}
      `
      commit('setPageLoading', true)
      axios.get(API)
        .then( ({data}) => {
          console.log('getProducts', data)        

          commit('setProducts', data.products)
          commit('setPagination', data.pagination)
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
      // 因為可能產品未啟用所以才這樣寫
      // 彈窗在觸發在page組件，用promise處理是否開啟彈窗
      return new Promise((resolve, reject) => {
        axios.get(API)
          .then( ({data}) => {
            console.log(data)
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
            reject(err)
          })
      })
    },
    addToCart({dispatch}, {id, qty = 1}){
      const API = `
        ${process.env.API_PATH}/api/${process.env.CUSTOM_API_PATH}/cart
      `
      const product = {
        'product_id': id,
        qty
      }

      return axios.post(API, { data: product })
        .then( ({data}) => {
          console.log(data)

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
    test(context, num){
      return num
    }
  }
}