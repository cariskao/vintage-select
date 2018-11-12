<template>
  <div id="app">
    <div class="wrapper">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,

  }
}
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
