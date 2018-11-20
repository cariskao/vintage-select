<template>
  <div class="container">
    
    <Carousel/>
    
    <section class="mt-5 container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <h2 class="text-center mb-4">關於 Vintage Select</h2>
          <p>Vintage Select 是一個輕鬆的古著選物平台。主理人 Leo 熱愛軍裝工裝穿搭，欣賞日本職人的製衣精神與工藝，歐美工裝的經典耐用與搭配，在這邊呈現給大家精選衣物與配件。</p>
          <p class="mb-0">
            商品分為二手美品與全新品，少量補貨，大部分都只有一件。品牌部分特別挑出日牌與工裝，其餘無品牌古著也都是細心挑選無重大瑕疵並仔細清洗過。
            Vintage Select 皆有品質篩選、網路購物七天鑑賞期，請安心選購。
          </p>
        </div>
      </div>
    </section>
    <section class="my-5 container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <p class="">
            看到喜歡的商品那就買吧！我們已經很難遇到喜歡的人，何必再為難自己忍住不買自己喜歡的東西呢？
            遇到喜歡的人，他也不一定喜歡你，但遇到喜歡的東西，只要你出錢，它就一定屬於你。<br><br>
            就算喜歡的人屬於你了，或許有一天也會離開你。
            但你買到喜歡的東西，不僅不會離開你，還能讓別人羨慕你！
            錢並沒有消失，錢只是換一個方式存在在你身邊。
          </p>
        </div>
      </div>
    </section>

    <hr>
    <Subscribe/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Subscribe from '@/components/Subscribe'
export default {
  components: {
    Carousel,
    Subscribe,
  }
}
</script>

<style lang="scss" scoped>
</style>
