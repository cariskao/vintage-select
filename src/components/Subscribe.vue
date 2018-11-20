<template>
  <div class="d-flex justify-content-center">
    <div class="py-5">
      <h5 class="mb-4">訂閱我們取得最新商品販售資訊</h5>

      <div class="input-group">
        <input type="text" class="form-control" aria-label="搜尋商品" aria-describedby="btnGroupAddon"
          placeholder="email"
          v-model.trim="email"
          @keyup.enter="subscribe"
          v-validate="'required|email'"
        >
        <div class="input-group-prepend">
          <ActionButton
            class="rounded-right"
            colorStyle="primary"
            btnLabel="訂閱"
            :isLoading="isLoading"
            @click.native="subscribe"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton'
import { mapActions } from 'vuex'
export default {
  components: {
    ActionButton
  },
  data(){
    return {
      email: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions('alert', ['updateMessage']),
    subscribe(){
      this.$validator.validate().then(result => {
        if (result) {
          this.isLoading = true

          setTimeout(() => {
            this.updateMessage({
              status: 'success',
              message: '訂閱成功'
            })
            this.isLoading = false
            this.email = ''
          }, 1000)
        }else{
          this.updateMessage({
            status: 'danger',
            message: '無效的email格式'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
