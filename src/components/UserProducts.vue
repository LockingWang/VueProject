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
                <div>
                  <button class="btn btn-sm btn-outline-danger" type="button"
                  @click="toggleLoveProduct(item, 'add')"
                  v-if="checkLoveList(item)">加到最愛</button>
                  <button class="btn btn-sm btn-outline-danger active" type="button"
                  @click="toggleLoveProduct(item, 'del')"
                  v-else>喜歡的商品</button>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
      </div>
      <div class="col-md-5">
        <div class="sticky-top">
          <h5 class="text-center mt-3">我的購物車</h5>
          <table class="table align-middle table-warning">
            <thead>
              <tr>
                <th>刪除</th>
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
              <td colspan="1">
                <button type="button" class="btn btn-outline-danger"
                        @click="removeCartItem('all')">清空購物車</button>
              </td>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
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
      cart: {},
      loveItemList: {},
      pagination: {},

      isLoading: false,
      status: {
        loadingItem: '', // 對應品項 id
      },
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
            this.updateLovedItem();
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
    toggleLoveProduct(item, sign) {
      if (sign === 'add') {
        this.loveItemList[item.id] = item;
        localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
      } else if (sign === 'del') {
        delete this.loveItemList[item.id];
        localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
      }
    },
    checkLoveList(item) {
      if (this.loveItemList[item.id] === undefined) {
        return true;
      }
      return false;
    },
    updateLovedItem() {
      if (!localStorage.getItem('loveItemList')) {
        this.loveItemList = {};
      } else {
        this.loveItemList = JSON.parse(localStorage.getItem('loveItemList'));
      }
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
