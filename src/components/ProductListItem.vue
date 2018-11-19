<template>
  <div class="col-sm-6 mb-3">
    <div class="card border-0">
      <div class="card-img-top img"
        :style="image(productInfo.imageUrl)"
      ></div>
      <div class="card-body p-3">
        <div class="h6 font-italic">{{ productInfo.category.brand }}</div>
        <div class="d-flex justify-content-between flex-column flex-lg-row">
          <h5 class="card-title mb-2 mb-lg-0">{{ productInfo.title }}</h5>
          <div class="h5"
            v-if="notOnSale"
          >{{ productInfo.price | currency }}</div>
          <div v-else class="h5 text-primary">
            <span class="font-italic">sale</span> {{ productInfo.price | currency }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object
    }
  },
  computed: {
    notOnSale(){
      return this.productInfo.origin_price === this.productInfo.price
    }
  },
  methods: {
    image(url){
      return {
        backgroundImage: `url("${url}")`
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(black, 0.2);
  }
}

.card-body {
  position: relative;
}

.img {
  
  mix-blend-mode: multiply;
  position: relative;
  height: 380px;
  background-position: center center;
  background-size: cover;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .img {
    height: 330px;
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .img {
    height: 300px;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .img {
    height: 250px;
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .img {
    height: 330px;
  }
}

</style>
