<template>  
  <nav class="navbar navbar-expand-sm navbar-light bg-light bg-white sticky-top header-shadow mb-4">
    <div class="container">
      <button class="navbar-toggler border-0 p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link class="navbar-brand font-italic mr-0 mr-sm-3" to="/index">Vintage Select</router-link>

      <div class="cart-btn-box order-sm-5">
        <router-link class="nav-link text-secondary d-flex justify-content-center align-items-center" to="/cart">
          <v-icon name="shopping-cart" scale="1.4"/>
        </router-link>
        <div class="cart-label rounded-circle border border-white"
          v-if="cartsAmount > 0"
        >{{ cartsAmount }}</div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/index">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/aboutus">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/brandintro">品牌介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shopping/all?page=1">購物商城</router-link>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('cart', ['cartsAmount'])
  },
  methods: {
    ...mapActions('cart', ['getCart'])
  },
  mounted(){
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.header-shadow {
  box-shadow: 0 0 10px rgba(black, 0.1);
}
.cart-btn-box {
  position: relative;
  .cart-label {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 10px;
    background: red;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
