<template>
  <ul class="nav d-flex flex-column ml-3 collapse" :id="`${category}Collapse`">
    <li class="nav-item"
      v-for="item in filterCategory"
      :key="item"
      :class="{active: $route.query[item] === item}"
    >
      <router-link
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
    filterCategory(){
      return this.$store.getters[ `product/${this.category}CategoryFilter` ]
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: blue;
}
</style>
