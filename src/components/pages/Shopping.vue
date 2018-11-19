<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <SideBar/>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '@/components/SideBar'
import ProductList from '@/components/ProductList'
export default {
  components: {
    SideBar,
    ProductList
  }
}
</script>

<style lang="scss" scoped>

</style>
