<template>
  <div class="container">
    <!-- 採用左右左右交錯排版（時間軸式，手機下單欄） -->
    <!-- 沒有參數時顯示BrandIntro組件，有參數時顯示BrandDetail組件 -->
    <div class="row">

      <div class="col-sm-6">
        <img class="img-fluid mb-3 mb-sm-0" src="@/assets/images/NBHD.jpg" alt="">
      </div>

      <div class="col-sm-6 d-flex flex-column justify-content-center">
        <router-link to="/brandintro/neighborhood">
          <h2 class="font-italic text-dark text-center mb-4">NEIGHBORHOOD</h2>
        </router-link>

        <!-- <p>NEIGHBORHOOD 由創辦人瀧澤伸介(Shinsuke Takizawa)於1994年成立，在當時發展小有規模的裏原宿中(潮流發源地)，由於左右品牌店家好比今日的美國街般，大家都是好朋友(都是鄰居的意思)，故將其品牌名稱取為NEIGHBORHOOD，簡稱NHBD。</p> -->
      </div>

    </div>

    <hr>

    <div class="row">

      <div class="col-sm-6 order-sm-1">
        <img class="img-fluid mb-3 mb-sm-0" src="@/assets/images/WTAPS.jpg" alt="">
      </div>

      <div class="col-sm-6 d-flex flex-column justify-content-center">
        <router-link to="/brandintro/wtaps">
          <h2 class="font-italic text-dark text-center mb-4">WTAPS</h2>
        </router-link>

        <!-- <p>WTAPS 為裏原宿重量級軍裝品牌，取自軍事用語 “Double Taps” 雙發連射，日語 W 音似 Double，故名 WTAPS。主理人西山徹 AKA TET 致力於將軍裝融入日常生活中，搭配日本職人手藝，造就軍裝服飾的不凡質感。</p> -->
      </div>

    </div>

    <hr>

    <div class="row">

      <div class="col-sm-6">
        <img class="img-fluid mb-3 mb-sm-0" src="@/assets/images/CRHT.jpg" alt="">
      </div>

      <div class="col-sm-6 d-flex flex-column justify-content-center">
        <router-link to="/brandintro/carharttwip">
          <h2 class="font-italic text-dark text-center mb-4">CARHARTT WIP</h2>
        </router-link>
      </div>

    </div>

    <hr>

    <div class="row">

      <div class="col-sm-6 order-sm-1">
        <img class="img-fluid mb-3 mb-sm-0" src="@/assets/images/VISVIM.jpg" alt="">
      </div>

      <div class="col-sm-6 d-flex flex-column justify-content-center">
        <router-link to="/brandintro/visvim">
          <h2 class="font-italic text-dark text-center mb-4">visvim</h2>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  components: {
    
  },
  
}
</script>

<style>

</style>
