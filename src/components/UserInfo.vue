<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="mt-5 row justify-content-center bg-light">
    <h5 class="text-center mt-3">訂購流程</h5>
    <div class="row justify-content-center">
      <div class="col-sm-4 mt-3" style="max-width: 200px;">
        <div class="border border-3 border-secondary rounded">
          <p class="text-center text-secondary mb-0">確認購物車</p>
        </div>
      </div>
      <div class="col-sm-4 mt-3" style="max-width: 200px;">
        <div class="border border-3 border-danger rounded">
          <p class="text-center text-danger mb-0">填寫訂購資訊</p>
        </div>
      </div>
      <div class="col-sm-4 mt-3" style="max-width: 200px;">
        <div class="border border-3 border-secondary rounded">
          <p class="text-center text-secondary mb-0">建立訂單</p>
        </div>
      </div>
    </div>
    <v-form class="col-md-6 bg-white mt-3 p-5" v-slot="{ errors }"
          @submit="createOrder">
      <h5 class="text-center">收件人資訊</h5>
      <div class="mb-3">
        <label for="email" class="form-label">Email<input v-if="false"></label>
        <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></v-field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名<input v-if="false"></label>
        <v-field id="name" name="姓名" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required"
                  v-model="form.user.name"></v-field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話<input v-if="false"></label>
        <v-field id="tel" name="電話" type="tel" class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="required"
                  v-model="form.user.tel"></v-field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址<input v-if="false"></label>
        <v-field id="address" name="地址" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required"
                  v-model="form.user.address"></v-field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言<input v-if="false"></label>
        <textarea name="" id="message" class="form-control" cols="30" rows="10"
                  v-model="form.message"></textarea>
      </div>
      <div class="text-end d-flex justify-content-between">
        <button class="btn btn-outline-secondary" type="button"
        @click="backToCart">
          <i class="bi bi-arrow-bar-left"></i>回到購物車
        </button>
        <button class="btn btn-danger w-50">
          建立訂單<i class="bi bi-arrow-bar-right"></i>
        </button>
      </div>
    </v-form>
  </div>
  </template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      status: {
        loadingItem: '', // 對應品項 id
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.isLoading = true;
      this.$http.post(url, { data: order })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.$httpMessageState('success', '建立訂單成功', '感謝您的訂購 !');
            this.$router.push(`/user/userCheckout/order/${res.data.orderId}`);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
          this.$httpMessageState('danger', '發生錯誤', '請聯繫工程師。');
        });
    },
    backToCart() {
      this.$router.go(-1);
    },
  },
};
</script>
