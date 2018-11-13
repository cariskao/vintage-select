<template>
  <div class="shopping-container">
    <SideBar/>
    <router-view></router-view>
    <!-- <productList/> -->
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import ProductList from '@/components/ProductList'
export default {
  components: {
    SideBar,
    ProductList
  },
  
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
