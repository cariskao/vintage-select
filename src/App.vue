<template>
  <div id="app" class="h-100 d-flex flex-column">
    <div class=" mb-3">
      <Header/>
      <Alert/>
      <router-view/>
    </div>

    <Footer/>
  </div>
</template>

<script>
import scrollToTop from '@/functions/scrollToTop'
import Header from '@/components/Header'
import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Alert,
    Footer
  },
  watch: {
    $route(){
      scrollToTop()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>

