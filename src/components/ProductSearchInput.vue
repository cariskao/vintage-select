<template>
  <div class="input-group">
    <input type="text" class="form-control" aria-label="搜尋商品" aria-describedby="btnGroupAddon"
      placeholder="搜尋商品"
      v-model.trim="searchFilter"
      @input="searchProductsDebounce(searchFilter)"
    >
    <div class="input-group-prepend">
      <button class="btn btn-primary rounded-right"
        @click="searchProducts(searchFilter)"
      ><v-icon name="search"/></button>
    </div>
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
