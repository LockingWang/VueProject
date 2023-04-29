<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="favorite-banner mb-3">
      <div class="banner-text d-flex align-items-center justify-content-center">
        <h1 class="text-white">喜歡的商品</h1>
      </div>
    </div>
    <h5 class="text-center">一共收藏了 {{ loveItemList.length }} 項商品</h5>
    <div class="container mb-3">
      <div class="row g-3">
        <div class="col-6" v-for="item in filtedProducts" :key="item.id">
          <div class="card mb-3 h-100">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="item.imageUrl" :alt="item.title"
                class="rounded-start w-100 h-100 object-fit-cover">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title mt-3 overflow-hidden"
                  style="height: 50px;">{{ item.title }}</h5>
                  <p class="card-text overflow-hidden text-secondary d-none d-md-block"
                  style="height: 50px;">{{ item.description }}</p>
                  <div>
                    <div class="h5" v-if="!item.price">
                      {{ $filters.currency(item.origin_price) }} 元
                    </div>
                    <del class="h6 d-none d-md-block" v-if="item.price">
                      原價 {{ $filters.currency(item.origin_price) }} 元
                    </del>
                    <div class="h5" v-if="item.price">
                      售價 {{ $filters.currency(item.price) }} 元
                    </div>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm"
                    @click="getProduct(item.id)">查看更多</button>
                    <button class="btn btn-outline-danger btn-sm"
                    @click="addToCart(item.id)">加到購物車</button>
                    </div>
                    <div class="position-absolute top-0 end-0">
                      <button class="btn btn-sm btn-danger" type="button"
                      @click="delLoveProduct(item)"><i class="bi bi-heartbreak"></i></button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PaginationModel :pages="pagination"
          @emit-pages="filtProducts"></PaginationModel>
      </div>
    </div>
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';

export default {
  components: {
    PaginationModel,
  },
  data() {
    return {
      loveItemList: [],
      filtedProducts: [],
      isLoading: false,
      cart: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
      pagination: {
        total_pages: '',
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    getLovedProducts() {
      if (localStorage.getItem('loveItemList')) {
        const loveItemObject = JSON.parse(localStorage.getItem('loveItemList'));
        this.loveItemList = Object.values(loveItemObject);
      }
      this.filtProducts();
    },
    filtProducts(page = 1) {
      if (page === 'previous') {
        this.pagination.current_page -= 1;
      } else if (page === 'next') {
        this.pagination.current_page += 1;
      } else if (page === 1) {
        this.pagination.current_page = 1;
      } else {
        this.pagination.current_page = page;
      }

      const pageItems = 8;
      this.pagination.total_pages = Math.ceil(this.loveItemList.length / pageItems);
      if (this.pagination.current_page === 1) {
        this.pagination.has_pre = false;
        this.pagination.has_next = true;
        if (this.pagination.total_pages === 1) {
          this.pagination.has_next = false;
        }
      } else if (this.pagination.current_page === this.pagination.total_pages) {
        this.pagination.has_next = false;
        this.pagination.has_pre = true;
      } else {
        this.pagination.has_next = true;
        this.pagination.has_pre = true;
      }
      const showItems = [];
      const CP = this.pagination.current_page;
      this.loveItemList.forEach((item, i) => {
        if (i <= CP * 8 - 1 && i >= CP * 8 - 8) {
          showItems.push(item);
        }
      });

      this.filtedProducts = showItems;
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
    addLoveProduct(item) {
      this.loveItemList[item.id] = item;
      localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
    },
    delLoveProduct(item) {
      delete this.loveItemList[item.id];
      localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
    },
    checkLoveList(item) {
      if (this.loveItemList[item.id] === undefined) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.getLovedProducts();
    this.getCart();
  },
};
</script>
