<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="row">
      <div class="col-md-7">
        <table class="table mt-4">
        <thead>
            <tr>
            <th width="120">圖片</th>
            <th width="120">商品名稱</th>
            <th width="120">價格</th>
            <th width="120">選項</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
            <td>
              <img class="img-fluid" :src="item.imageUrl" :alt="item.title">
            </td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              <div class="h5" v-if="!item.price">{{ $filters.currency(item.origin_price) }} 元</div>
              <del class="h6" v-if="item.price">
                原價 {{ $filters.currency(item.origin_price) }} 元
              </del>
              <div class="h5" v-if="item.price">現在只要 {{ $filters.currency(item.price) }} 元</div>
            </td>
            <td>
                <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm"
                @click="getProduct(item.id)">查看更多</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="addToCart(item.id)">加到購物車</button>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
      </div>
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>刪除</th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
            <template v-if="cart.carts">
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
                          v-model.number="item.qty">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
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
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <label for="#coupon_code">
            <input id="coupon_code" type="text" class="form-control"
            v-model="coupon_code" placeholder="請輸入優惠碼"></label>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationModel :pages="pagination"
      @emit-pages="getProducts"></PaginationModel>
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';

export default {
  components: {
    PaginationModel,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      cart: {},
      coupon_code: '',
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    getProducts(page = 1) {
      let toPage = '';
      if (page === 'previous' && this.pagination.has_pre) {
        toPage = this.pagination.current_page - 1;
      } else if (page === 'next' && this.pagination.has_next) {
        toPage = this.pagination.current_page + 1;
      } else {
        toPage = page;
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${toPage}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
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
          this.$router.push('/user/cart');
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
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
