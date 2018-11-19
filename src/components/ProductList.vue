<template>
  <div>
    <Loading :active.sync="isPageLoading"/>

    <div class="row">
      <ProductListItem
        v-for="product in filterCurrentPageProducts"
        :key="product.id"
        :productInfo="product"
        @click.native="showProductDetail(product.id)"
      />
    </div>

    <h4 class="text-center" v-if="filterProducts.length === 0">暫無資料</h4>

    <hr>

    <Pagination/>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ProductListItem from '@/components/ProductListItem'
import Pagination from '@/components/Pagination'
export default {
  components: {
    ProductListItem,
    Pagination
  },
  computed: {
    ...mapState('product', ['products', 'pageLimit', 'isPageLoading']),
    ...mapGetters('product', [
      'enabledProducts',
      'onSaleProducts'
    ]),
    currentPage(){
      return this.$route.query.page
    },
    filterProducts(){
      // 基於這個filterProducts中再藉由page切出陣列
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
        case 'search':
          const searchFilter = this.$route.query.search
          return this.enabledProducts.filter(
            ({ title }) => title.match(searchFilter)
            // 還要做暫無資料的提示
          )
          break
        default:
          return []
          break
      }
    },
    filterCurrentPageProducts(){
      return this.filterProducts.filter((item, index) => 
        index >= (this.currentPage - 1) * this.pageLimit && index <= this.currentPage * this.pageLimit - 1
      )
    }
  },
  methods: {
    showProductDetail(id){
      this.$router.push(`/shopping/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

