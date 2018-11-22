<template>
  <div class="position-relative h-100">
    <Loading :active.sync="isPageLoading" :isFullPage="false"/>

    <div v-if="product.id">
      <div class="row">

        <div class="col-sm-6">
          <img class="img-fluid mb-4 mb-sm-0" :src="product.imageUrl" alt="">
        </div>

        <div class="col-sm-6 d-flex flex-column">
          <div class="h5 mb-3">{{ product.category.brand }}</div>
          <h3 class="mb-sm-3">{{ product.title }}</h3>

          <div class="h5" v-if="notOnSale">{{ product.price | currency }}</div>
          <div v-else>
            <del class="d-block mb-1">{{ product.origin_price | currency }}</del>
            <div class="h5 text-primary"><span class="font-italic">sale</span> {{ product.price | currency }}</div>
          </div>

          <div class="mt-auto mb-2">小計 {{ product.price * qty | currency }}</div>
          <div class="btn-group">
            <div class="btn-group">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                v-if="productRemainAmount > 0 "
              >選購 {{qty}} {{product.unit}}
              </button>
              <button v-else class="btn btn-primary disabled">選購 0 件</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#"
                  v-for="amount in productRemainAmount"
                  :key="amount"
                  @click.prevent="qty = amount"
                >
                  {{amount}} {{product.unit}}
                </a>
              </div>
            </div>

            <button class="btn btn-primary disabled" v-if="productRemainAmount === 0">已加入購物車</button>
            <ActionButton
              v-else
              colorStyle="primary"
              btnLabel="加入購物車"
              :isLoading="isAddToCartLoading"
              @click.native="addToCart"
            />
          </div>

        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-sm-6">
          <div class="h5 font-weight-normal">商品介紹</div>
          <p v-if="product.description">{{ product.description }}</p>
          <p v-else>無</p>
        </div>
        <div class="col-sm-6">
          <div class="h5 font-weight-normal">商品備註</div>
          <pre v-if="product.content">{{ product.content }}</pre>
          <pre v-else>無</pre>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import ActionButton from '@/components/ActionButton'
export default {
  components: {
    ActionButton
  },
  data(){
    return {
      isAddToCartLoading: false,
      qty: 1
    }
  },
  computed: {
    ...mapState('product', ['product', 'isPageLoading']),
    ...mapState('cart', ['cart']),
    id(){
      return this.$route.params.id
    },
    notOnSale(){
      return this.product.origin_price === this.product.price
    },
    checkProductInCartData(){
      return this.cart.carts.filter( ({product_id}) => this.id === product_id)
    },
    productRemainAmount(){
      // 邏輯：
      // 首先一定會檢查購物車中是否有商品
      // 如果有，找出購物車中“所有”商品qty總和並減去
      const cartAmount = this.checkProductInCartData.reduce(
        (accu, { qty }) => accu += qty
      , 0)
      return this.product.amount - cartAmount
    }
  },
  methods: {
    ...mapActions('product', ['getProduct', 'addToCart']),
    ...mapActions('cart', ['getCart']),
    ...mapMutations('product', ['setProduct']),
    addToCart(){
      this.isAddToCartLoading = true
      const product = {
        product_id: this.id,
        qty: this.qty,        
      }

      // 對不起我巢狀了
      this.$store.dispatch('product/addToCart', product)
        .then(() => {
          this.qty = 1
          this.getCart()
            .then(() => {
              this.isAddToCartLoading = false
            })
        })
    }
  },
  mounted(){
    this.getProduct(this.id)
  },
  destroyed(){
    // 頁面銷毀時清除vuex暫存商品的資料
    this.setProduct({
      category: {
        brand: '',
        type: ''
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// 給loading-overlay定位用
.position-relative {
  position: relative;
}
</style>
