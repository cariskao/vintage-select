<template>
  <aside class="side-bar mb-3 mb-sm-0">
    <ProductSearchInput class="mb-3"/>
    <div class="h5">分類</div>
    <ul class="nav d-flex flex-column">
      <li class="nav-item">
        <router-link
          :class="color('all')"
          :to="{
            path: '/shopping/all',
            query: {
              page: 1
            }
          }"
        >全部</router-link>
      </li>
      <li class="nav-item">
        <router-link 
          :class="color('sale')"
          :to="{
            path: '/shopping/sale',
            query: {
              page: 1
            }
          }"
        >特價</router-link>
      </li>
      <li class="nav-item">
        <a class="text-secondary" href="#" @click.prevent="currentFilter = 'type'">類別</a>
        <SideBarCollapse
          category="type"
          v-if="currentFilter === 'type'"
        />
      </li>
      <li class="nav-item">
        <a class="text-secondary" href="#" @click.prevent="currentFilter = 'brand'">品牌</a>
        <SideBarCollapse
          category="brand"
          v-if="currentFilter === 'brand'"
        />
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
    return {
      currentFilter: this.$route.params.filter
    }
  },
  computed: {
    ...mapState('product', ['products']),
    ...mapGetters('product', [
      'enabledProducts',
      'brandCategoryFilter',
      'typeCategoryFilter',
      'onSaleProducts'
    ]),
    // 連結顏色還是要參考此
    currentFilterComputed(){
      return this.$route.params.filter
    }
  },
  methods: {
    ...mapActions('product', ['getProducts']),
    color(filter){
      return {
        'text-primary': filter === this.currentFilterComputed,
        'text-secondary': filter !== this.currentFilterComputed
      }
    }
  },
  watch: {
    $route(){
      this.currentFilter = this.$route.params.filter
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>

<style>

</style>
