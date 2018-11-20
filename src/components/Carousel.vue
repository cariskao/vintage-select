<template>
  <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="3000">
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
      <li data-target="#carousel" data-slide-to="3"></li>
      <li data-target="#carousel" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="image" :style="image(1)"></div>
      </div>
      <div class="carousel-item">
        <div class="image" :style="image(2)"></div>
      </div>
      <div class="carousel-item">
        <div class="image" :style="image(3)"></div>
      </div>
      <div class="carousel-item">
        <div class="image" :style="image(4)"></div>
      </div>
      <div class="carousel-item">
        <div class="image" :style="image(5)"></div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    image(page){
      return {
        backgroundImage: `url(${require(`@/assets/images/carousel/${page}.jpg`)})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 630px;
  background-position: center center;
  background-size: cover;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .image {
    height: 550px;
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .image {
    height: 480px;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .image {
    height: 430px;
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .image {
    height: 300px;
  }
}
</style>
