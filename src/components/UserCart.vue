<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="row bg-light justify-content-center">
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
              <template v-if="cart.carts">
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
                    <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="2">
                  <button type="button" class="btn btn-outline-danger"
                          @click="removeCartItem('all')">清空購物車</button>
                </td>
                <td colspan="1" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
              </tfoot>
            </table>
            <div class="input-group input-group-sm mb-1" style="max-width: 300px;">
              <input type="text" class="form-control" aria-label="coupon_code"
              v-model="coupon_code" placeholder="請輸入優惠碼">
              <button class="btn btn-warning" type="button" @click="addCouponCode">
                  套用優惠碼
              </button>
            </div>
            <p class="text-secondary">提示 : 請輸入[ japan666 ]</p>
          </div>
          <router-link to="/user/userCheckout/userInfo" class="btn btn-danger w-100">
          下一步 : 填寫訂購資訊</router-link>
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
      cart: {},
      coupon_code: '',
      status: {
        loadingItem: '', // 對應品項 id
      },
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '加入購物車');
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon })
        .then(() => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
