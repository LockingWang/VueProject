<template>
    <div class="fixed-cart d-none d-md-block">
        <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasWithBothOptions"
        role="button" aria-controls="offcanvasExample">
        <img src="https://img-bsy.txrpic.com/preview/Element/00/00/96/60/E-966041-F44B8F15.png?imageMogr2/quality/90/thumbnail/!800x%3E" alt="cart"
        class="img-fluid">
        <span class="position-absolute start-50 translate-middle badge rounded-pill bg-info"
        style="top: 10%;">
            {{ cart.carts.length }}
        </span>
        </a>
    </div>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1"
    id="offcanvasWithBothOptions" ref="offCanvas">
        <LoadingOverlay :active="isLoading"></LoadingOverlay>
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
                    <th>單價</th>
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
                    <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                    {{ $filters.currency(item.final_total) }}
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
            <div>
              <router-link class="btn btn-warning w-50 shadow-sm d-block mx-auto go-checkout-btn"
              to="/user/userCheckout/cart" @click="offCanvas.hide()">
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
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart })
        .then(() => {
          this.isLoading = false;
          this.status.loadingItem = '';
          this.$emit('change-cart');
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
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '刪除', '快去尋找更適合的商品吧 ~ !');
          this.$emit('change-cart');
        })
        .catch((err) => {
          console.log(err.response);
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