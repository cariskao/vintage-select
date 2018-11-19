<template>
  <div id="app" class="h-100">
    <Header/>
    <div class="h-100 d-flex flex-column">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
