<template>
  <ul>
    <li>
      <router-link to=""></router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('pagination', [
      'filter',
      'type',
      'currentPage',
      'totalPage'
    ])
  },
  watch: {
    $route(to, from){

    }
  }
}
</script>

<style>

</style>
