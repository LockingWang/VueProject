<template>
    <div class="container-fluid border-bottom">
        <div class="row justify-content-center bg-light">
            <div class="col-md-6">
                <div class="card text-center bg-white my-5 p-5 border border-success border-3">
                    <div class="card-body bg-white">
                        <h5>訂單查詢</h5>
                        <input type="text" required aria-label="orderId"
                        class="form-control"
                        v-model="orderId"
                        @change="warning = false"
                        placeholder="請輸入訂單編號">
                    </div>
                    <p class="text-danger" v-if="warning">查詢不到該筆訂單，請重新輸入。</p>
                    <div>
                      <button class="btn btn-success w-50" @click="getOrder"
                      v-if="orderId">搜尋訂單</button>
                      <p v-else>忘記訂單編號 ? 請聯絡我們
                        <i class="bi bi-telephone-fill ms-1 text-success"></i>
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      warning: false,
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            if (!res.data.order) {
              this.warning = true;
            } else {
              this.$router.push(`/user/userCheckout/order/${this.orderId}`);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
