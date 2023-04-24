<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="row justify-content-center">
        <h2 class="text-center text-success mt-3">成功建立訂單</h2>
        <form class="col-md-6 mb-3 py-3 border rounded">
            <h5 class="text-center bg-info mb-0 py-1 rounded-top">
              訂單編號  <span class="fs-6">({{ this.$route.params.orderId }})</span>
            </h5>
            <table class="table text-center">
                <thead class="table-secondary">
                    <th>品名</th>
                    <th>數量</th>
                    <th>總價</th>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="item in order.products" :key="item.product_id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.qty }} / {{ item.product.unit }}</td>
                        <td>{{ $filters.currency(item.final_total) }}</td>
                    </tr>
                </tbody>
                <tfoot class="table-secondary table-group-divider">
                    <td colspan="2" class="text-end">總計 : </td>
                    <td>{{ $filters.currency(order.total)}}</td>
                </tfoot>
            </table>
            <hr>
            <h5 class="text-center bg-info mb-0 py-1 rounded-top">訂購人資訊</h5>
            <table class="table">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                        <th>姓名</th>
                        <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                        <th>收件人電話</th>
                        <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                        <th>收件人地址</th>
                        <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                        <th>付款狀態</th>
                        <td class="text-danger" v-if="!order.is_paid">尚未付款</td>
                        <td class="text-success" v-else>付款完成</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-end" v-if="!order.is_paid">
                <router-link to="/user/userCheckout/payment" class="btn btn-primary w-100">
                    下一步 : 付款去</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.order = res.data.order;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
