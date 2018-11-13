<template>
  <div class="product-list-container">
    <ul class="product-list">
      <ProductListItem
        v-for="product in filterProducts"
        :key="product.id"
        :productInfo="product"
      />
    </ul>

    <h3 class="text-center" v-if="filterProducts.length === 0">暫無資料</h3>

    <Pagination/>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import ProductListItem from '@/components/ProductListItem'
import Pagination from '@/components/Pagination'
export default {
  components: {
    ProductListItem,
    Pagination
  },
  computed: {
    ...mapState('product', ['products']),
    ...mapGetters('product', [
      'enabledProducts',
      'onSaleProducts',
      // 'typeCategoryFilter',
      // 'brandCategoryFilter'
    ]),
    filterProducts(){
      switch(this.$route.params.filter){
        case 'all':
          return this.enabledProducts
          break
        case 'sale':
          return this.onSaleProducts
          break
        case 'type':
          const type = this.$route.query.type
          return this.enabledProducts.filter(
            ({ category: {type: productType} }) => type === productType
            // 還要做暫無資料的提示
          )
          break
        case 'brand':
          const brand = this.$route.query.brand
          return this.enabledProducts.filter(
            ({ category: {brand: productBrand} }) => brand === productBrand
            // 還要做暫無資料的提示
          )
          break
        default:
          return []
          break
      }
    }
  },
  methods: {
    ...mapActions('product', ['getProducts'])
  },
  watch: {
    $route(to){
      console.log('to的queryString', to.query)
    }
  },
  mounted(){
    this.getProducts()
    console.log(this.$route)

    // fullPath: "/shopping/all?brand='WTAPS'"
    // hash: ""
    // matched: (3) [{…}, {…}, {…}]
    // meta: {}
    // name: undefined
    // params: {filter: "all"}
    // path: "/shopping/all"
    // query: {brand: ""WTAPS""}
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>

