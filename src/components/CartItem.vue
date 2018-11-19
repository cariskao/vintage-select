<template>
  <div>
    <div class="d-flex align-items-center">
      <img class="img-fluid mr-4" width="150" height="150" :src="cartItemInfo.product.imageUrl" alt="">

      <div class="align-middle">
        {{ cartItemInfo.product.title }}
        <div class="text-success" v-if="cartItemInfo.coupon">
          已套用優惠券
        </div>
      </div>

      <div class="ml-auto mr-4">{{ cartItemInfo.qty }}/{{ cartItemInfo.product.unit }}</div>
      <div class="mr-4">{{ cartItemInfo.final_total | currency }}</div>

      <ActionButton
        colorStyle="outline-primary"
        :isLoading="isDateleItemLoading"
        @click.native="deleteCartItem( cartItemInfo.id )"
      >
        <v-icon name="trash-alt"/>
      </ActionButton>
    </div>

    <hr>

  </div>

  
</template>

<script>
import ActionButton from '@/components/ActionButton'
export default {
  props: {
    cartItemInfo: {
      type: Object
    }
  },
  components: {
    ActionButton
  },
  data(){
    return {
      isDateleItemLoading: false
    }
  },
  methods: {
    deleteCartItem(id){
      this.isDateleItemLoading = true
      this.$store.dispatch('cart/deleteCartItem', id)
        .then(() => this.isDateleItemLoading = false)
    }
  }
}
</script>

<style>

</style>
