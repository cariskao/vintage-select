// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

import 'bootstrap'

//  axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// -----------

// vue-awesome
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/spinner'
import 'vue-awesome/icons/angle-left'
import 'vue-awesome/icons/angle-right'
import 'vue-awesome/icons/shopping-cart'
import 'vue-awesome/icons/trash-alt'

import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)
// -----------

// vue-loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.component('Loading', Loading)
// ----------

// vee-validate
import VeeValidate, {Validator} from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
Validator.localize('zh_TW', zhTW)
Vue.use(VeeValidate)
// -----------

// filter
import currencyFilter from '@/filters/currency'
Vue.filter('currency', currencyFilter)
// ----------


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view/>'
})
