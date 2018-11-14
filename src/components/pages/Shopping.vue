<template>
  <div class="shopping-container">
    <Loading :active.sync="isLoading"/>
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SideBar from '@/components/SideBar'
import ProductList from '@/components/ProductList'
export default {
  components: {
    SideBar,
    ProductList
  },
  computed: {
    ...mapState('product', {
      isLoading: 'isPageLoading'
    })
  },
  methods: {
    ...mapActions('product', ['getProducts'])
  },
  mounted(){
    console.log(this.getProducts())
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.shopping-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.side-bar {
  flex: 1;
}
.product-list-container {
  flex: 4;
}
</style>
