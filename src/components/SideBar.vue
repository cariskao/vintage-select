<template>
  <aside class="side-bar">
    <ProductSearchInput class="mb-3"/>
    <div class="h5">分類</div>
    <ul class="nav d-flex flex-column">
      <li class="nav-item">
        <router-link :to="{
          path: '/shopping/all',
          query: {
            page: 1
          }
        }">全部</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{
          path: '/shopping/sale',
          query: {
            page: 1
          }
        }">特價</router-link>
      </li>
      <li class="nav-item">
        <!-- <a data-toggle="collapse" data-target="#typeCollapse">類型</a> -->
        <span>類別</span>
        <SideBarCollapse category="type"/>
      </li>
      <li class="nav-item">
        <span>品牌</span>
        <SideBarCollapse category="brand"/>
      </li>
    </ul>
  </aside>
</template>

<script>
// 或許可以拆為SideBarMenu
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductSearchInput from '@/components/ProductSearchInput'
import SideBarCollapse from '@/components/SideBarCollapse'
export default {
  components: {
    ProductSearchInput,
    SideBarCollapse
  },
  data(){
    return{
      // current: '' 還沒用到
    }
  },
  computed: {
    ...mapState('product', ['products']),
    ...mapGetters('product', [
      'enabledProducts',
      'brandCategoryFilter',
      'typeCategoryFilter',
      'onSaleProducts'
    ])
  },
  methods: {
    ...mapActions('product', ['getProducts']),
  },
  watch: {
    $route(){
      
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>

<style>

</style>
