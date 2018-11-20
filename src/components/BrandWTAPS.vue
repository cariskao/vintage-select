<template>
  <div class="container">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10 col-lg-8 col-xl-6">
        <img class="img-fluid" src="@/assets/images/WTAPS.jpg" alt="">
      </div>
    </div>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">WTAPS 的故事</h3>
        <p>在裏原宿服裝文化中，WTAPS 絕對是不可或缺的存在，WTAPS 前身叫 “40% Against Rights” (FPAR)，由西山徹與 Skate-Thing 在1993年成立。</p>
        <p>當西山還是中學生的時候，已經認識藤原浩和 Nigo，更經常一同外出遊樂，也因此在一同投身潮流服裝產業後便持續合作互相提攜。當時西山的品牌當時只是以寄賣形式在藤原浩的 Nowhere、瀧沢伸介的 NBHD 店內寄賣，後來才正式以品牌店鋪活躍。而後1997年時 Skate-thing 離開 WTAPS 加入 APE，西山徹正式將 FPAR 命名為 WTAPS 重新出發，將自己的品牌打造成為軍事風貌的代表性 ICON。</p>
        <p class="mb-0">WTAPS 的正確讀法，不了解的人可能會讀成：W-T-A-P-S ,稍微懂點的英文的可能會讀成：W-taps，其實這兩種讀法都是錯誤的。常看日文雜誌的朋友們一定常常看到所謂的 W-Name 這個用詞，這是因為在日文中 W 跟 Double 的念法很接近，W-TAPS 這個品牌名也是一樣，就是 Double-Taps 的意思，該詞是一個軍事用語「雙發連射」，是指在射擊的時候只瞄準一次，之後快速的扣兩次板機，讓子彈造成相近的彈著點，以增加殺傷率。WTAPS 剛好為西山徹的第二個品牌，可以看出西山徹想帶給裏原宿文化第二次衝擊的野心。</p>
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <img class="img-fluid w-100" src="@/assets/images/brandintro/wtaps1.jpg" alt="">
      </div>
    </section>

    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">品牌特色</h3>
        <p>說西山徹是把軍裝帶入日本流行文化的先驅之一絕對不為過，WTAPS 不管在服裝或是小物，都有相當的巧思，很注重細節，旨在將軍裝融入日常穿搭中。</p>
        <p>由於西山徹的英文非常好，FPAR 本身就是以標語商品為大眾聞名。因此西山徹也為 WTAPS 注入許多的經典標語，「PLACE THINGS WHERE THY SHOULD BE」即「物盡其用」，表達出西山設計的兩個基點：日本的職人工匠與道家文化。「visual uparmored」指視覺武裝，表達軍裝穿搭的視覺感與自信的態度。</p>
        <p>符合亞洲人的剪裁，寬鬆舒適的穿著感，厚實帆布搭配水洗處理，或是來自日本和歌山古紡織機產出的頂級天竺棉，在 WTAPS 上都運用得恰到好處，絕對是粗獷軍裝風格穿搭的首選。</p>
      </div>
    </div>

    <div class="text-center mb-4">
      <router-link
        class="h4 text-primary"
        :to="{
          path: '/shopping/brand',
          query: {
            brand: 'WTAPS',
            page: 1
          }
        }"
      >前往選購 WTAPS</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
