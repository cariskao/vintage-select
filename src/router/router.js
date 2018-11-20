import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from '@/App'
import Index from '@/components/pages/Index'
import BrandIntro from '@/components/pages/BrandIntro'
import Shopping from '@/components/pages/Shopping'
import Cart from '@/components/pages/Cart'
import OrderCheckout from '@/components/pages/OrderCheckout'
import PageRouterView from '@/components/PageRouterView'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import BrandDetail from '@/components/BrandDetail'
import BrandNBHD from '@/components/BrandNBHD'
import BrandWTAPS from '@/components/BrandWTAPS'
import BrandCRHT from '@/components/BrandCRHT'
import BrandVISVIM from '@/components/BrandVISVIM'

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
          path: 'brandintro',
          component: PageRouterView,
          children: [
            {
              path: '',
              component: BrandIntro
            },
            // {
            //   path: ':brand',
            //   name: 'brandDetail',
            //   component: BrandDetail
            // },
            {
              path: 'neighborhood',
              component: BrandNBHD
            },
            {
              path: 'wtaps',
              component: BrandWTAPS
            },
            {
              path: 'carharttwip',
              component: BrandCRHT
            },
            {
              path: 'visvim',
              component: BrandVISVIM
            }
          ]
        },
        {
          path: 'shopping',
          component: Shopping,
          children: [
            {
              path: ':filter',
              component: ProductList
            },
            {
              path: 'detail/:id',
              component: ProductDetail
            }
          ]
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'order/:orderId',
          component: OrderCheckout
        },

      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
