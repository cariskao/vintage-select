<template>
  <div>
    {{brand}}
  </div>
</template>

<script>
export default {
  computed: {
    brand(){
      return this.$route.params.brand
    }
  },
}
</script>

<style>

</style>
