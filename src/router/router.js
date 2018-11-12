import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from '@/App'
import Index from '@/components/pages/Index'
import AboutUs from '@/components/pages/AboutUs'
import BrandIntro from '@/components/pages/BrandIntro'
import Shopping from '@/components/pages/Shopping'
import Cart from '@/components/pages/Cart'



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: App,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'aboutus',
          component: AboutUs
        },
        {
          path: 'brandintro',
          component: BrandIntro
        },
        {
          path: 'shopping',
          component: Shopping
        },
        {
          path: 'cart',
          component: Cart
        },

      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
