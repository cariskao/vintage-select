// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

//  axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// -----------

// vue-awesome
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons/shopping-cart'

import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)
// -----------

// vue-loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.component('Loading', Loading)
// ----------

// vee-validate
// 已安裝未啟用
// -----------


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view/>'
})
