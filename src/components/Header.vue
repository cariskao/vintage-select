<template>
  <header class="header">
    <router-link to="/index">
      <h1 class="text-italic">Vintage Select</h1>
    </router-link>
    <nav class="ml-2">
      <ul class="nav-list">
        <li>
          <router-link class="btn" to="/index">首頁</router-link>
        </li>
        <li>
          <router-link class="btn" to="/aboutus">關於我們</router-link>
        </li>
        <li>
          <router-link class="btn" to="/brandintro">品牌介紹</router-link>
        </li>
        <li>
          <router-link class="btn" to="/shopping">購物商城</router-link>
        </li>
      </ul>
    </nav>
    <router-link class="btn ml-a" to="/cart">
      <v-icon name="shopping-cart" scale="1.2"/>
    </router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
