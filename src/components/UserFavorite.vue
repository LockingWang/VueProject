<template>

    <div>
      <img src="../../public/favorite-banner.svg" alt="Japan Style Room"
      class="w-100">
    </div>
    <h5 class="text-center py-3" v-if="filtedProducts.length !== 0">
      一共收藏了 {{ loveItemList.length }} 項商品</h5>
    <div class="container mb-3">
      <div class="row g-3" v-if="filtedProducts.length !== 0">
        <div class="col-6" v-for="item in filtedProducts" :key="item.id">
          <div class="card h-100 favor-card">
            <div class="row g-0">
              <div class="col-md-4">
                <div class="img-box rounded-start">
                  <div class="bg-img rounded-start"
                  :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"></div>
                </div>
              </div>
              <div class="col-md-8 border-start">
                <div class="card-body">
                  <h5 class="card-title mt-0 mt-md-3 text-ellipsis-multi">{{ item.title }}</h5>
                  <div class="d-flex align-items-end">
                    <div class="h5" v-if="!item.price">
                      {{ $filters.currency(item.origin_price) }} 元
                    </div>
                    <del class="h6 d-none d-md-block" v-if="item.price">
                      原價 {{ $filters.currency(item.origin_price) }} 元
                    </del>
                    <div class="h5 ms-3 text-danger" v-if="item.price">
                      售價 {{ $filters.currency(item.price) }} 元
                    </div>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm" type="button"
                    @click="getProduct(item.id)">查看更多</button>
                    <button class="btn btn-outline-danger btn-sm" type="button"
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
      <div class="row justify-content-center" v-else>
        <div class="col-md-6 text-center">
          <h5>歐歐~ 似乎還沒有喜歡的商品呢 !</h5>
          <div class="mx-auto" style="width: 200px;">
            <img class="img-fluid rounded" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/239057858/IOS/sticker.png" alt="Question Cat">
          </div>
          <router-link to="/products" class="btn btn-outline-warning">
            趕快去看看
          </router-link>
        </div>
      </div>
    </div>
    <UserCart :cart="cart" @change-cart="getCart" />
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';
import UserCart from '@/components/UserCartOffcanvas.vue';
import CartMixin from '@/mixins/CartMixin';

export default {
  components: {
    PaginationModel,
    UserCart,
  },
  data() {
    return {
      loveItemList: [],
      filtedProducts: [],
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
    filtProducts(page = this.pagination.current_page) {
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
      this.$router.push(`/product/${id}`);
    },
    delLoveProduct(item) {
      this.loveItemList = JSON.parse(localStorage.getItem('loveItemList'));
      delete this.loveItemList[item.id];
      localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
      this.getLovedProducts();
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
  },
  mixins: [CartMixin],
};
</script>
