<template>
  <nav class="d-flex align-items-sm-center flex-column flex-sm-row">

    <div class="dropdown mr-sm-3 mb-2 mb-sm-0">
      <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        顯示 {{pageLimit}} 筆
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#"
          v-for="value in pageLimitList"
          :key="value"
          @click.prevent="setPageLimit(value)"
        >
          {{value}} 筆
        </a>
      </div>
    </div>

    <ul class="pagination d-flex m-0"
      v-if="totalPage > 1"
    >
      <li class="p-1" v-if="currentPage !== 1">
        <router-link class="p-2 d-flex justify-content-center align-items-center text-dark"
          :to="linkTo(currentPage - 1)"
          @click.native="scrollToTop"
        ><v-icon name="angle-left" scale="1.4"/></router-link>
      </li>
      <li class="h5 p-1 mb-0 d-flex justify-content-center align-items-center"
        v-for="page in totalPage"
        :key="page"
      >
        <router-link class="p-2 text-dark"
          :to="linkTo(page)"
          @click.native="scrollToTop"
        >{{ page }}</router-link>
      </li>
      <li class="p-1" v-if="currentPage !== totalPage">
        <router-link class="p-2 d-flex justify-content-center align-items-center text-dark" 
          :to="linkTo(currentPage + 1)"
          @click.native="scrollToTop"
        ><v-icon name="angle-right" scale="1.4"/></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// 分頁邏輯，全依賴路由訊息做運算
import { mapGetters, mapState } from 'vuex'
export default {
  data(){
    return {
      pageLimitList: [6, 10, 14, 20]
    }
  },
  computed: {
    ...mapState('product', ['pageLimit']),
    ...mapGetters('product', [
      'enabledProducts',
      'onSaleProducts'
    ]),
    currentPage(){
      return Number(this.$route.query.page)
    },
    totalPage(){
      switch(this.$route.params.filter){
        case 'all':
          return Math.ceil( this.enabledProducts.length / this.pageLimit )
          break
        case 'sale':
          return Math.ceil( this.onSaleProducts.length / this.pageLimit )
          break
        case 'type': {
          const type = this.$route.query.type
          const data = this.enabledProducts.filter(
            ({ category: {type: productType} }) => type === productType
          )
          return Math.ceil( data.length / this.pageLimit )
          break
        }
        case 'brand': {
          const brand = this.$route.query.brand
          const data = this.enabledProducts.filter(
            ({ category: {brand: productBrand} }) => brand === productBrand
          )
          return Math.ceil( data.length / this.pageLimit )
          break
        }
        case 'search': {
          const searchFilter = this.$route.query.search
          const data = this.enabledProducts.filter(
            ({ title }) => title.match(searchFilter)
            // 還要做暫無資料的提示
          )
          return Math.ceil( data.length / this.pageLimit )
          break
        }
        default:
          return 1
          break
      }
    }
  },
  methods: {
    linkTo(page){
      // 把query物件展開，再修改page即可
      const query = { ...this.$route.query }
      // 這邊已將從$route物件取得的page字串重新賦值為函數帶入的數字
      query.page = page 
      return { query }
    },
    setPageLimit(val){
      this.$store.commit('product/setPageLimit', val)
      // 如果總頁數小於當前頁面，跳轉到最後一頁
      if(this.totalPage < this.currentPage){
        this.$router.push( this.linkTo(this.totalPage) )
      }
    },
    scrollToTop(){
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
