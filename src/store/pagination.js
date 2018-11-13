import axios from 'axios'

export default {
  namespaced: true,
  state: {
    filter: '全部、特價、品牌、類型 四種',
    type: '品牌名稱或類型',
    currentPage: 1,
    totalPages: 2
  },
  getters: {

  },
  mutations: {
    setFilter(state, filter){
      state.filter = filter
    },
    setType(state, type){
      state.type = type
    },
    setCurrentPage(state, currentPage){
      state.currentPage = currentPage
    },
    setTotalPages(state, totalPages){
      state.totalPages = totalPages
    },
  },
  actions: {
    computedTotalPage({rootGetters}, {filter, type}){
      
    },
    createPagination({rootGetters}, {filter, type}){
      // 先講產品列表邏輯
      // 產品頁為router-view，每個產品分類都是router-link，切換路由後產品列表取得queryString的page與細分類來渲染產品列表

      // 路由大概長這樣： /#/shopping/filter?brand="NEIGHBORHOOD"&?page="1"

      // 如何基於ＳＳＯＴ來正確對應頁數與產品列表？
      // 點選router-link分類直接切換路由 -> pagination物件會watch $route來自動修改內部state -> 
      // 切換頁面後產品列表組件依據queryString渲染，Pagination組件依據pagination物件渲染 ->
      // 每個分頁標籤都是router-link，藉由pagination物件組成路由字串to來換頁 ->
      // 重要！修改完路由，在pagination組件watch $route，重新生成pagination state，避免只打網址就無法生成
      // 產品列表組件watch $route，來動態渲染內容


      // 這是原本pagination物件
      // category:null
      // current_page:1
      // has_next:true
      // has_pre:false
      // total_pages:2

      // pagination物件，在點選sidebar的router-link後，watch到路由訊息改變而生成，已展開寫成state
      const pagination = {
        filter: '全部、特價、品牌、類型 四種',
        type: '品牌名稱或類型', // 所以如果filter是all或sale，type就為null
        currentPage: 1,
        // has_pre: false,
        // has_next: true, 可以不用這兩個，前後分頁用v-if $route.query.page !== 1 和 !== total_pages就好
        totalPages: 2
      }
      // 首先點選sidebar的四大分類，再點選子分類，開始切換路由（ 全部和特價本身就是router-link直接切換，因為沒有子分類 ）
      // 產品列表組件取得queryString渲染出清單
      // 每個分頁標籤都是一個router-link，to屬性動態綁定為pagination物件組成的字串，就能不切字較方便的切換路由
      // 官方（參考响应路由参数的变化）建議watch路由訊息物件$route，藉由發現$route改變後動態渲染產品清單


      // 計算totalPage的時機：
      // pagination組件偵測queryString的階段，先取得filter與type，再去和rootGetters的對應四大陣列做比對
      // 
    }
  }
}