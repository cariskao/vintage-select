<template>
  <li class="product-list-item">
    {{productInfo.title}}
  </li>
</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list-item {
  width: calc(100% / 2);
}
</style>
