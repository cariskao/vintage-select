<template>
  <div>
    <div class="p-3 bg-light-gray mb-4">
      <h4 class="text-center text-opacity-black font-weight-normal mb-0">購物車內容</h4>
    </div>
    
    <CartItem
      v-for="item in carts"
      :key="item.id"
      :cartItemInfo="item"
    />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
export default {
  props: {
    carts: {
      type: Array
    }
  },
  components: {
    CartItem
  },
}
</script>

<style>

</style>
