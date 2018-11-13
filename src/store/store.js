import Vue from 'vue' 
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import product from './product'
import cart from './cart'
import order from './order'

export default new Store({
  modules: {
    product,
    cart,
    order
  }
})