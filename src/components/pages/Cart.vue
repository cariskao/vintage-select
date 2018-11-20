<template>
  <div class="container">
    <Loading :active.sync="isPageLoading"/>

    <Progress/>
    <div class="jumbotron text-center" v-if="cart.carts.length === 0">
      <div class="h4 mb-5">購物車內無商品</div>
      <router-link class="btn btn-lg btn-primary" to="/shopping/all?page=1">前往商城</router-link>

    </div>
    <div v-else class="row">

      <div class="col-sm-4 order-sm-2"
        :class="{
          'order-2': status === 0,
          'mb-3': status !== 0
        }"
      >
        <div class="p-3 bg-light-gray">
          <div class="h4 font-weight-normal text-center text-opacity-black mb-3">訂單摘要</div>
          <hr>

          <div class="d-flex justify-content-between mb-3"
            v-if="cart.total === cart.final_total"
          >
            <div class="text-right">小計</div>
            <div class="text-right">{{ cart.total | currency }}</div>
          </div>
          <div class="d-flex justify-content-between mb-3"
            v-else
          >
            <div class="text-right text-success">折扣小計</div>
            <div class="text-right text-success">{{ cart.final_total | currency }}</div>
          </div>

          <div class="d-flex justify-content-between mb-3">
            <div class="text-right">運費</div>
            <div class="text-right">{{ freight | currency }}</div>
          </div>
          <div class="d-flex justify-content-between"
            :class="{'mb-3': status === 0}"
          >
            <div class="h5 mb-0 text-right">總計</div>
            <div class="h5 mb-0 text-right">{{ cart.final_total + freight | currency }}</div>
          </div>

          <div class="input-group input-group-sm"
            v-if="status === 0"
          >
            <input type="text" class="form-control" placeholder="輸入優惠碼"
              v-model.trim="couponCode"
              @keydown.enter="useCoupon"
            >
            <div class="input-group-append">
              <ActionButton
                colorStyle="outline-secondary"
                btnLabel="套用優惠碼"
                :isLoading="isUseCouponLoading"
                @click.native="useCoupon"
              />
            </div>
          </div>
        </div>
        <div class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
          v-if="status === 0"
          @click="status = 1; scrollToTop()"
        >建立訂單</div>
        <div class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
          v-else
          @click="status = 0"
        >取消</div>
      </div>

      <div class="col-sm-8 order-1">
        <CartContent
          v-if="status === 0"
          :carts="cart.carts"
        />

        <CartCheckoutUserInfo
          v-if="status === 1"
          @nextProgress="status += 1"
        />

      </div>

    </div>
    
  </div>
</template>

<script>
// 購物車內容(0) -> 按下確認結帳checkout -> userinfo(1) -> createOrder

import { mapState, mapActions } from 'vuex'
import scrollToTop from '@/functions/scrollToTop'
import Progress from '@/components/Progress'
import CartContent from '@/components/CartContent'
import CartCheckoutUserInfo from '@/components/CartCheckoutUserInfo'
import ActionButton from '@/components/ActionButton'
export default {
  components: {
    Progress,
    CartContent,
    ActionButton,
    CartCheckoutUserInfo,
  },
  data(){
    return {
      couponCode: '',
      status: 0,
      isUseCouponLoading: false
    }
  },
  computed: {
    ...mapState('cart',['cart', 'freight', 'isPageLoading'])
  },
  methods: {
    scrollToTop,
    ...mapActions('cart', ['getCart']),
    useCoupon(){
      if(!this.couponCode) return

      this.isUseCouponLoading = true
      this.$store.dispatch('cart/useCoupon', this.couponCode)
        .then(() => {
          this.couponCode = ''
          this.isUseCouponLoading = false
        })
    }
  },
  mounted(){
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>

</style>
