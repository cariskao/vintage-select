<template>
  <div>
    <div class="p-3 bg-light-gray">
      <h4 class="text-center text-opacity-black font-weight-normal mb-0">收件人資訊</h4>
    </div>
    <div class="border border-top-0 border-bottom-0 p-3">
      
      <div class="form-group">
        <label for="useremail"
          :class="{ 'text-danger': errors.has('email') }"
        >Email</label>
        <input type="email" class="form-control" name="email" id="useremail"
          :class="{'is-invalid': errors.has('email')}"
          v-validate="'required|email'"
          v-model="order.user.email"
          placeholder="請輸入正確Email"
        >
      </div>
    
      <div class="form-group">
        <label for="username"
          :class="{ 'text-danger': errors.has('name') }"
        >收件人姓名</label>
        <input type="text" class="form-control" name="name" id="username"
          :class="{'is-invalid': errors.has('name')}"
          v-validate="'required'"
          v-model="order.user.name"
          placeholder="輸入姓名"
        >
      </div>
    
      <div class="form-group">
        <label for="usertel"
          :class="{ 'text-danger': errors.has('tel') }"
        >收件人電話</label>
        <input type="tel" class="form-control" name="tel" id="usertel"
          :class="{'is-invalid': errors.has('tel')}"
          v-validate="'required'"
          v-model="order.user.tel"
          placeholder="請輸入電話"
        >
      </div>
    
      <div class="form-group">
        <label for="useraddress"
          :class="{ 'text-danger': errors.has('address') }"
        >收件人地址</label>
        <input type="address" class="form-control" name="address" id="useraddress"
          :class="{'is-invalid': errors.has('address')}"
          v-validate="'required'"
          v-model="order.user.address"
          placeholder="請輸入地址"
        >
      </div>
    
      <div class="form-group">
        <label for="message">留言</label>
        <textarea name="message" id="message" class="form-control"
          cols="5" rows="3"
          v-model="order.message"
        ></textarea>
      </div>

    </div>
    <ActionButton
      class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
      colorStyle="primary"
      btnLabel="送出訂單"
      :isLoading="isLoading"
      @click.native="createOrder"
    />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import ActionButton from '@/components/ActionButton'
export default {
  components: {
    ActionButton
  },
  data(){
    return {
      order: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapMutations('cart', ['setUserInfo']),
    ...mapActions('cart', {
      createOrderAction: 'createOrder'
    }),
    nextProgress(){
      this.$validator.validate().then(result => {
        if (result) {
          this.$emit('nextProgress')
        } else {
          console.log('未填寫正確欄位')
        }
      })
    },
    createOrder(){
      this.$validator.validate().then(result => {
        if (result) {
          this.isLoading = true
          this.createOrderAction(this.order)
            .then(() => {
              this.isLoading = false
            })
        }
      })
    }
  },
}
</script>

<style>

</style>
