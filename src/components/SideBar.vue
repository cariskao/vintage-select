<template>
  <aside class="side-bar">
    <h4>分類</h4>
    <ul>
      <li>
        <router-link :to="{
          path: '/shopping/all',
          query: {
            page: 1
          }
        }">全部</router-link>
      </li>
      <li>
        <router-link :to="{
          path: '/shopping/sale',
          query: {
            page: 1
          }
        }">特價</router-link>
      </li>
      <li>
        <span>類型</span>
        <SideBarSelect category="type"/>
      </li>
      <li>
        <span>品牌</span>
        <SideBarSelect category="brand"/>
      </li>
    </ul>
  </aside>
</template>

<script>
// 或許可以拆為SideBarMenu
import { mapState, mapGetters } from 'vuex'
import SideBarSelect from '@/components/SideBarSelect'
export default {
  components: {
    SideBarSelect
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
  data(){
    return{
      current: ''
    }
  },
  watch: {
    $route(){
      
    }
  }
}
</script>

<style>

</style>
