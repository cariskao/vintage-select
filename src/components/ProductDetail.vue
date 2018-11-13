<template>
  <div>
    <h2>detail</h2>
    <div v-if="product.id">
      {{ product }}
    </div>
    <h2 v-else>很抱歉，找不到該產品</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('product', ['product'])
  },
  methods: {
    ...mapActions('product', ['getProduct'])
  },
  mounted(){
    this.getProduct(this.$route.params.id)
  }
}
</script>

<style>

</style>
