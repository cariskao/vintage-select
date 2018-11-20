<template>
  <div class="container">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10 col-lg-8 col-xl-6">
        <img class="img-fluid" src="@/assets/images/CRHT.jpg" alt="">
      </div>
    </div>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">CARHARTT 的歷史</h3>
        <p>在介紹 CARHARTT WIP 之前，必須先從 CARHARTT 的歷史開始介紹。來自美國工裝品牌的 CARHARTT，由創辦人 Hamilton Carhartt 於1889年創立，至今已有百年歷史。而 CARHARTT 誕生的城市也正是號稱美國汽車工業重要根據地的底特律，因此也不難想像為何他們的工裝會如此出名了。</p>
        <p>而對該品牌熟悉的人應該都知道，CARHARTT 的商品總是特別硬挺與耐磨，其秘密就來自於他們使用的布料：最初 CARHARTT 是選用丹寧布料混織的織物製成，因為加入丹寧布的關係因此特別耐操，而他們第一件工裝褲也正是使用此款布料打造，這款帆布甚至在後來還成為 CARHARTT 商標布的品牌特徵。隨著科技進步，在布料的選擇上也採用高級織物材料去生產，讓藍領階級的工作者可以無畏惡劣環境，依舊能夠安心的穿著 CARHARTT 去上班。</p>
        <p class="mb-0">然而時過境遷，CARHARTT 現在的主要購買對象或許早已不再是針對工人為主，但對服裝品質的要求也絲毫不減，也從此奠定他們在工裝界中不朽的經典地位。</p>
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <img class="img-fluid w-100" src="@/assets/images/brandintro/crht1.jpg" alt="">
      </div>
    </section>
    
    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">CARHARTT 與 CARHARTT WIP的差異</h3>
        <p>簡單介紹完 CARHARTT，就開始介紹主角 CARHARTT WIP。其出現是由於 CARHARTT 在1994年第一次授權於美洲以外的公司做代理，而這間代理 CARHARTT 的公司是歐洲一間叫做 Work in Progress 的公司。</p>
        <p>由於兩國間文化上的差異，也造就了兩者截然不同的品牌風格，但可以確定的是，CARHARTT 所堅持的高品質、耐用性及舒適性是雙方都共同追求的目標。而 CARHARTT WIP與 CARHARTT 最大的不同則是將工裝風格結合更多的城市環境元素，同時致力於滑板、BMX的街頭領域，改變大家對 CARHARTT 既定的工裝印象，成為年輕時尚的一個新興指標。</p>
        <p class="mb-0">所以簡單來說，CARHARTT WIP 就是 CARHARTT 的其中一個支線，而這個支線除了保有原本工裝風格的特色之外，更融入街頭、潮流等元素，同時版型也更加合身貼近年輕人喜歡的樣貌，也因此讓 CARHARTT WIP 迅速走紅全世界。</p>
      </div>
    </section>

    <div class="text-center mb-4">
      <router-link
        class="h4 text-primary"
        :to="{
          path: '/shopping/brand',
          query: {
            brand: 'CARHARTT WIP',
            page: 1
          }
        }"
      >前往選購 CARHARTT WIP</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
