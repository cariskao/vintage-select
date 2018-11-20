<template>
  <ul class="nav d-flex flex-column ml-3">
    <li class="nav-item"
      v-for="item in filterCategory"
      :key="item"
    >
      <router-link
        :class="color(item)"
        :to="{
          path: `/shopping/${category}`,
          query: {
            [category]: item,
            page: 1
          }
        }"
      >{{ item }}</router-link>
      
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    category: {
      type: String
    }
  },
  computed: {
    currentFilter(){
      return this.$route.params.filter
    },
    filterCategory(){
      return this.$store.getters[ `product/${this.category}CategoryFilter` ]
    },
  },
  methods: {
    color(category){
      return {
        'text-primary': this.$route.query[this.currentFilter] === category,
        'text-secondary': this.$route.query[this.currentFilter] !== category
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>
</style>
