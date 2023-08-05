<template>
  <LoadingOverlay :active="isLoading" />
  <div class="container-fluid">
    <div class="row justify-content-center bg-light">
      <div class="col-md-6 bg-white mt-5">
        <h5 class="text-center mt-3">訂購流程</h5>
        <div class="row justify-content-center">
          <div class="col-sm-4 mt-3" style="max-width: 200px;">
            <div class="border border-3 border-secondary rounded">
              <p class="text-center text-secondary mb-0">確認購物車</p>
            </div>
          </div>
          <div class="col-sm-4 mt-3" style="max-width: 200px;">
            <div class="border border-3 border-secondary rounded">
              <p class="text-center text-secondary mb-0">填寫訂購資訊</p>
            </div>
          </div>
          <div class="col-sm-4 mt-3" style="max-width: 200px;">
            <div class="border border-3 border-danger rounded">
              <p class="text-center text-danger mb-0">建立訂單</p>
            </div>
          </div>
        </div>
        <hr>

        <h5 class="text-center mt-3">訂單成立</h5>
        <p class="mb-0 text-center text-secondary fs-6">
          於{{ $filters.date(order.create_at * 1000) }}成立</p>
        <form class="py-3 rounded">
            <h5 class="text-center bg-warning mb-0 py-1 rounded-top">
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
                        <td class="text-end">{{ $filters.currency(item.final_total) }}
                          <span style="font-size: 8px;">NTD</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-group-divider">
                    <td colspan="2" class="text-end">總計 : </td>
                    <td class="text-end px-2">
                      {{ $filters.currency(order.total)}}
                      <span class="px-0"
                      style="font-size: 8px; background-color: transparent;">NTD</span>
                    </td>
                </tfoot>
            </table>
            <hr>
            <h5 class="text-center bg-warning mb-0 py-1 rounded-top">訂購人資訊</h5>
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
                <router-link to="/userCheckout/payment" class="btn btn-danger w-50">
                    下一步 : 付款去</router-link>
            </div>
        </form>
      </div>
    </div>
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
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
