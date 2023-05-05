<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="bg-light">
    <div class="container bg-light">
      <div class="row justify-content-center">
        <div class="col-md-11 bg-white mt-5">
          <div class="row justify-content-center">
            <div class="col-md-8 mb-5 pt-3">
              <h5 class="text-center">訂購流程</h5>
              <div class="row g-3 justify-content-center">
                <div class="col-sm-4" style="max-width: 200px;">
                  <div class="border border-3 border-danger rounded">
                    <p class="text-center text-danger mb-0">確認購物車</p>
                  </div>
                </div>
                <div class="col-sm-4" style="max-width: 200px;">
                  <div class="border border-3 border-secondary rounded">
                    <p class="text-center text-secondary mb-0">填寫訂購資訊</p>
                  </div>
                </div>
                <div class="col-sm-4" style="max-width: 200px;">
                  <div class="border border-3 border-secondary rounded">
                    <p class="text-center text-secondary mb-0">建立訂單</p>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h5 class="text-center mt-3 fw-bold">購物車</h5>
                <table class="table align-middle">
                  <thead class="table-light">
                    <tr>
                      <th></th>
                      <th>品名</th>
                      <th style="width: 120px">數量</th>
                      <th class="text-center">單價</th>
                    </tr>
                  </thead>
                  <tbody>
                  <template v-if="!cart.carts.length == 0">
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"
                                @click="removeCartItem(item.id)">
                          <i class="bi bi-trash"></i>
                        </button>
                      </td>
                      <td>
                        {{ item.product.title }}
                        <div class="text-success" v-if="item.coupon">
                          已套用優惠券
                        </div>
                      </td>
                      <td>
                        <div class="input-group input-group-sm">
                          <input type="number" class="form-control" aria-label="buy number"
                                v-model.number="item.qty" min="1"
                                @change="updateCart(item)"
                                :disabled="this.status.loadingItem === item.id">
                          <div class="input-group-text bg-warning">/ {{ item.product.unit }}</div>
                        </div>
                      </td>
                      <td class="text-end">
                        <p v-if="item.coupon" class="text-success mb-0">折扣價</p>
                        {{ $filters.currency(item.final_total) }}
                        <span style="font-size: 8px;">NTD</span>
                      </td>
                    </tr>
                  </template>
                  <tr v-else>
                    <td colspan="4">
                      <p class="text-center text-secondary">目前購物車內沒有商品...</p>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td colspan="2">
                      <button type="button" class="btn btn-outline-danger"
                      @click="removeCartItem('all')"
                      :disabled="cart.carts.length == 0">清空購物車</button>
                    </td>
                    <td colspan="1" class="text-end">總計</td>
                    <td class="text-end">
                      {{ $filters.currency(cart.total) }}
                      <span style="font-size: 8px;">NTD</span>
                    </td>
                  </tr>
                  <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-end text-success">折扣價</td>
                    <td class="text-end text-success">
                      {{ $filters.currency(cart.final_total) }}
                      <span style="font-size: 8px;">NTD</span>
                    </td>
                  </tr>
                  </tfoot>
                </table>
                <div class="input-group input-group-sm mb-1" style="max-width: 300px;">
                  <input type="text" class="form-control" aria-label="coupon_code"
                  v-model="coupon_code" placeholder="請輸入優惠碼">
                  <button class="btn btn-warning" type="button" @click="addCouponCode"
                  :disabled="coupon_code === '' || cart.carts.length == 0">
                      套用優惠碼
                  </button>
                </div>
                <p class="text-secondary">提示 : 請輸入[ japan666 ]</p>
              </div>
              <router-link to="/user/userCheckout/userInfo" class="btn btn-danger w-100"
              v-if="!cart.carts.length == 0">
              下一步 : 填寫訂購資訊</router-link>
            </div>
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
      isLoading: false,
      cart: {
        carts: [],
      },
      coupon_code: '',
      status: {
        loadingItem: '', // 對應品項 id
      },
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
        });
    },
    updateCart(item) {
      let modifyQty = 1;
      if (item.qty >= 1) {
        modifyQty = item.qty;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: modifyQty,
      };
      this.$http.put(url, { data: cart })
        .then(() => {
          this.isLoading = false;
          this.status.loadingItem = '';
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    removeCartItem(id) {
      let target = 'carts';
      if (id !== 'all') {
        target = `cart/${id}`;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/${target}`;
      this.isLoading = true;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$httpMessageState('success', '刪除商品成功', '快去尋找更適合的商品吧 ~ !');
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
          this.$httpMessageState('danger', '發生錯誤', '請聯繫工程師。');
        });
    },
    addCouponCode() {
      this.coupon_code = this.coupon_code.trim();
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.$httpMessageState('success', '套用優惠券成功', '確認商品後，點擊下一步填寫資料。');
            this.getCart();
          } else {
            this.$httpMessageState('warning', '套用優惠券失敗', res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$httpMessageState('danger', '發生錯誤', '請聯繫工程師。');
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
