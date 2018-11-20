<template>
  <div class="container">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10 col-lg-8 col-xl-6">
        <img class="img-fluid" src="@/assets/images/NBHD.jpg" alt="">
      </div>
    </div>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">NEIGHBORHOOD 的故事</h3>
        <p>NEIGHBORHOOD 由瀧澤伸介 (Shinsuke Takizawa) 於1994年成立，在當時發展小有規模的裏原宿中(潮流發源地)，由於左右品牌店家好比今日的美國街般，大家都是好朋友 (都是鄰居的意思)，故將其品牌名稱取為 NEIGHBORHOOD，簡稱 NHBD。</p>
        <p>主理人瀧澤伸介熱愛機車以及龐克音樂等等元素，與 Wtaps 主理人西山徹同為好友，兩者的風格互相碰撞互相影響。因此在 NEIGHBORHOOD 亦能看到不少美式風格的軍事元素。</p>
        <p class="mb-0">NEIGHBORHOOD 以電車和工裝理念作為藍本再加上當時史無前例的黑暗為主調，不但震撼了日本潮流界，更使日本的潮人們的搶購風潮，經過十幾年這個獨特的黑暗色調已成為他們的招牌，但同時也加入了更多元素使他顯得更豐富，因為美國那邊將版權及設計交付給日本人，所以在GRAPHIC上也漸漸帶點日式的設計，連簡單的字體都可以看得出他們的用心和特性。</p>
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <img class="img-fluid w-100" src="@/assets/images/brandintro/nbhd1.jpg" alt="">
      </div>
    </section>

    <section class="row d-flex justify-content-center mb-5">
      <div class="col-sm-10">
        <h3 class="text-center mb-4">品牌特色</h3>
        <p>在擅長軍事及機車文化風格的瀧澤伸介設計下，產品多帶有硬漢的街頭風格。品牌主要的設計理念是來自於美國的機車文化，破壞牛仔褲、皮夾克等都是品牌相當具有代表性的商品。特別是招牌的洗水牛仔褲， NEIGHBORHOOD 自家研發的魚骨洗水技巧，品牌於04年推出的 Ripper，更是奠定了牛仔褲對於 NEIGHBORHOOD 在工藝技巧上驚人的威信。而瀧澤伸介對其品牌非常用心，甚至一條拉鏈一粒紐扣都要經過他的鑑定才能使用。</p>
        <p>除了各種聯名與機車裝工作服之外，NEIGHBORHOOD 就是以丹寧商品最為聞名，厚實的丹寧布料基底，搭配設計獨到的車縫走線、特殊的補丁破壞與潑漆油漬處理，每季發售的丹寧商品都令人為之心癢。</p>
        <p class="mb-0"></p>
      </div>
    </section>

    <div class="text-center mb-4">
      <router-link
        class="h4 text-primary"
        :to="{
          path: '/shopping/brand',
          query: {
            brand: 'NEIGHBORHOOD',
            page: 1
          }
        }"
      >前往選購 NEIGHBORHOOD</router-link>
    </div>
  </div>
</template>



<script>
export default {

}
</script>

<style>

</style>
