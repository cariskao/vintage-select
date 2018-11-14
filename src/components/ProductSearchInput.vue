<template>
  <div>
    <input type="text"
      placeholder="搜尋商品"
      v-model.trim="searchFilter"
      @input="searchProductsDebounce(searchFilter)"
    >
    <button
      @click="searchProducts(searchFilter)"
    ><v-icon name="search"/></button>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      searchFilter: ''
    }
  },
  methods: {
    ...mapActions('product', ['searchProducts'])
  },
  watch: {
    $route(){
      if(this.$route.params.filter !== 'search'){
        this.searchFilter = ''
      }
    },
  },
  created(){
    this.searchProductsDebounce = debounce(this.searchProducts, 500)
  }
}
</script>

<style>

</style>
