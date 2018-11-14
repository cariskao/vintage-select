<template>
  <div>
    <select v-model="pageLimitSelect" name="" id="">
      <option 
        v-for="value in pageLimitList"
        :key="value"
        :value="value"
      >每頁顯示{{ value }}筆</option>
    </select>

    <ul class="pagination">
      <li v-if="currentPage !== 1">
        <router-link :to="linkTo(currentPage - 1)">上一頁</router-link>
      </li>
      <li
        v-for="page in totalPage"
        :key="page"
      >
        <router-link :to="linkTo(page)">{{ page }}</router-link>
      </li>
      <li v-if="currentPage !== totalPage">
        <router-link :to="linkTo(currentPage + 1)">下一頁</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 分頁邏輯，全靠路由訊息做運算
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
    pageLimitSelect: {
      get(){
        return this.$store.state.product.pageLimit
      },
      set(val){
        this.$store.commit('product/setPageLimit', val)
        // 如果總頁數小於當前頁面，跳轉到最後一頁
        if(this.totalPage < this.currentPage){
          this.$router.push( this.linkTo(this.totalPage) )
        }
      }
    },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}
li {
  padding: 10px;
}
</style>
