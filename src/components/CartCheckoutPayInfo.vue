<template>
  <div>
    <div class="p-3 bg-light-gray">
      <h4 class="text-center text-opacity-black font-weight-normal mb-0">付款</h4>
    </div>
    <div class="border border-top-0 border-bottom-0 p-3">
      
      <div class="form-group">
        <label for="creditCardCode"
          :class="{ 'text-danger': errors.has('creditCardCode') }"
        >信用卡卡號</label>
        <input type="text" class="form-control" name="creditCardCode" id="creditCardCode"
          :class="{'is-invalid': errors.has('creditCardCode')}"
          v-validate="'required'"
          v-model="payInfo.creditCardCode"
          placeholder="請輸入信用卡卡號"
        >
      </div>
    
      

    </div>
    <div class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
      @click="nextProgress"
    >
      <span class="h5 font-weight-normal mb-0">確認付款</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      payInfo: {
        creditCardCode: '',
        creditCardOwner: '',
        dueDate: {
          month: '',
          year: ''
        },
        threeNumber: ''
      }
    }
  },
  methods: {
    ...mapMutations('cart', ['setPayInfo']),
    nextProgress(){
      this.$validator.validate().then(result => {
        if (result) {
          this.$emit('nextProgress')
        }
      })
    }
  },
  created(){
    this.payInfo = { ...this.$store.state.cart.userInfo }
  },
  beforeDestroy(){
    this.setPayInfo(this.payInfo)
  }
}
</script>

<style>

</style>
