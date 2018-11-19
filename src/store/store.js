import Vue from 'vue' 
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import alert from './alert'
import product from './product'
import cart from './cart'
import order from './order'

export default new Store({
  modules: {
    alert,
    product,
    cart,
    order
  }
})