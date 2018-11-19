<template>
  <div id="app" class="h-100">
    <Header/>
    <div class="h-100 d-flex flex-column">
      <Alert/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Alert,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
