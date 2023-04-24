<template>
    <div class="container-fluid">
        <div class="row justify-content-center mt-3">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-header">
                        訂單查詢
                    </div>
                    <div>
                        <div class="w-100">
                            <label for="floatingInputGroup2" class="input-group-text">
                                訂單編號:
                            <input type="text" class="form-control"
                            v-model="orderId" @change="warning = false"
                            id="floatingInputGroup2" placeholder="訂單編號" required>
                            </label>
                        </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                        <button class="btn btn-primary w-100" @click="getOrder"
                        v-if="orderId">搜尋訂單</button>
                        <p v-else>請輸入訂單編號</p>
                    </div>
                </div>
                <p class="text-danger" v-if="warning">查詢不到該筆訂單，請重新輸入。</p>
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
