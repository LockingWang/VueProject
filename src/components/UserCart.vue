<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <table class="table mt-4">
        <thead>
            <tr>
            <th width="120">圖片</th>
            <th width="120">商品名稱</th>
            <th width="120">價格</th>
            <th width="200">選項</th>
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
  },
  created() {
    this.getProducts();
  },
};
</script>
