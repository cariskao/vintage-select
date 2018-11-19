<template>
  <div class="row justify-content-center px-3">
    <loading :active.sync="isPageLoading"/>

    

    <div class="col-md-8 col-lg-6" @submit.prevent="payOrder(orderId)">

      <div class="p-3 bg-light-gray">
        <h4 class="text-center text-opacity-black font-weight-normal mb-0">訂單內容</h4>
      </div>

      <div class="p-3 border border-top-0 border-bottom-0">
        <table class="table">
          <thead>
            <th class="border-top-0">商品</th>
            <th class="border-top-0">數量</th>
            <th class="border-top-0">單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="mb-0">
              <td colspan="2" class="text-right">運費</td>
              <td class="text-right">{{ freight | currency }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total + freight | currency }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th width="120">收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
        v-if="order.is_paid === false"
        @click="payOrder"
      >確認結帳</div>
      <router-link class="rounded-0 py-2 btn btn-lg btn-primary btn-block"
        v-else
        to="/shopping/all?page=1"
      >繼續逛逛</router-link>

    </div>
  </div>
</template>

<script>
// 測試用id -LRa30F8W7lW3ndXQHi5  -LRb7APBqvEdbEAMhUfR
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('cart', ['freight']),
    ...mapState('order', {
      order: 'checkoutOrder',
      isPageLoading: 'isPageLoading'
    }),
    orderId(){
      return this.$route.params.orderId
    }
  },
  methods: {
    ...mapMutations('order', ['setPageLoading']),
    ...mapActions('order', ['getOrder']),
    payOrder(){
      this.setPageLoading(true)
      this.$store.dispatch('order/payOrder', this.orderId)
        .then((data) => {
          this.$store.dispatch('alert/updateMessage', {
            message: data.message,
            status: data.success === true
              ? 'success'
              : 'danger'
          })
          
          this.getOrder(this.orderId)
            .then(() => this.setPageLoading(false))
        })
    }
  },
  mounted(){
    this.getOrder(this.orderId)
  },
}
</script>

<style>

</style>
