<template>
    <div class="fixed-cart d-none d-md-block" v-if="cart.carts.length !== 0">
        <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasWithBothOptions"
        role="button" aria-controls="offcanvasExample">
        <img src="@/assets/images/cart.svg" alt="cart" class="img-fluid">
        <span class="position-absolute start-50 translate-middle badge rounded-pill bg-info"
        style="top: 10%;">
            {{ cart.carts.length }}
        </span>
        </a>
    </div>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1"
    id="offcanvasWithBothOptions" ref="offCanvas"
    style="width: 600px">
        <LoadingOverlay :active="isLoading" />
        <div class="offcanvas-header bg-danger text-white">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">我的購物車</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">
            <table class="table align-middle">
                <thead>
                <tr>
                    <th style="width: 48px">刪除</th>
                    <th>品名</th>
                    <th style="width: 120px">數量</th>
                    <th style="width: 120px">單價</th>
                </tr>
                </thead>
                <tbody>
                <template v-if="cart.carts.length">
                <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                            @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
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
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                    </div>
                    </td>
                    <td class="text-end">
                    <p v-if="item.coupon" class="text-success mb-0">折扣價</p>
                    <p class="mb-0">
                      {{ $filters.currency(item.final_total) }}
                      <span style="font-size: 8px;">NTD</span>
                    </p>
                    </td>
                </tr>
                </template>
                <template v-else>
                <tr>
                    <td colspan="4" class="text-center">尚未加入任何商品</td>
                </tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                <td colspan="2">
                    <button type="button" class="btn btn-outline-danger"
                    @click="removeCartItem('all')"
                    :disabled="cart.carts.length === 0">清空購物車</button>
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
            <div>
              <router-link class="btn btn-warning w-50 shadow-sm d-block mx-auto go-checkout-btn"
              to="/userCheckout/cart"
              @click="offCanvas.hide()"
              v-if="cart.carts.length">
                <i class="bi bi-coin mx-3"></i>我要結帳<i class="bi bi-coin mx-3"></i>
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import OffCanvas from 'bootstrap/js/dist/offcanvas';

export default {
  props: ['cart'],
  emits: ['change-cart'],
  data() {
    return {
      isLoading: false,
      status: {
        loadingItem: '',
      },
      offCanvas: {},
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    updateCart(item) {
      if (item.qty < 1) {
        this.$httpMessageState('warning', '商品數量不得小於1', '請重新輸入 !');
        return;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.status.loadingItem = '';
            this.$emit('change-cart');
          } else {
            this.$httpMessageState('warning', '購物車更新失敗', '請重試一次。');
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生錯誤', '請聯繫工程師。');
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
          this.$emit('change-cart');
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生錯誤', '請聯繫工程師。');
        });
    },
    toggleCanvas() {
      this.offCanvas.show();
    },
  },
  mounted() {
    this.offCanvas = new OffCanvas(this.$refs.offCanvas);
  },
};
</script>
