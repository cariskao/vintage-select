<template>
  <div class="container">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10 col-lg-8 col-xl-6">
        <img class="img-fluid" src="@/assets/images/VISVIM.jpg" alt="">
      </div>
    </div>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">visvim 的故事</h3>
        <p class="mb-0">
          visvim，由中村世紀於 2000 年創立，一個專注於鞋款並逐漸拓展到服裝、配件、香氛的品牌，如今已備受世界矚目。他們在設計、材質、模式及工藝上一直在進行不斷探索，以打造兼具複雜設計及高功能性的產品。<br><br>
          中村世紀，一位日本的指標性人物，先後於美國極限運動品牌 Gravis 及 Burton 任職過，在他任職時間的Gravis也曾在日本掀起了一陣狂熱，相當精確的市場策略正是品牌 visvim 在未來的十多年樹立威信的原因之一。<br><br>
          中村世紀表示：擁有真正有價值的東西，以及對長期擁有之物所累積的喜愛，都是非常純粹的樂趣，它們能讓你從產品中獲得享受。而我的職責，就是將這些概念融入到消費者的產品中。關於設計概念，我非常強調「從內部創造產品」：設計不應該圍繞表面打造，而是應該從裡到外進行。換句話說，設計從材料和結構就開始了
        </p>
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <img class="img-fluid w-100" src="@/assets/images/brandintro/visvim1.jpg" alt="">
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">品牌特色</h3>
        <p class="mb-0">
          visvim 的品牌當中，常以日本傳統文化、美洲原住民服裝或是美國拓荒者的工作服為靈感，在許多細節中並有許多工藝的傳承，這些特色都是在一般的服飾當中很少看到的。包括日本傳統的有機植物手染、傳統工匠打造的鈕扣、皮革等等，讓每個商品都有不同的小小缺陷，而這些小小的不同來自工匠們純手工打造的溫暖感。<br><br>
          2013 年，visvim 在表參道 GYRE 開設了概念店舖 F.I.L Indigo Camping Trailer (ICT)，僅出售天然染制的產品。總括看來，visvim 秉持的高級質感以及結合舊有經典及現代科技的全新演繹，仍是品牌至今屹立不搖的強力主因。
        </p>
      </div>
    </section>

    <div class="text-center mb-4">
      <router-link
        class="h4 text-primary"
        :to="{
          path: '/shopping/brand',
          query: {
            brand: 'visvim',
            page: 1
          }
        }"
      >前往選購 visvim</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
