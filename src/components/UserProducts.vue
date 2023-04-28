<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>

    <div class="products-banner mb-3">
      <div class="banner-text d-flex align-items-center justify-content-center">
        <h1 class="text-white">商品專區</h1>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-9">

          <section>
            <div class="row">
              <div class="col-md-6">
                <div class="fs-5 mb-3">
                  <ul class="d-flex list-unstyled">
                    <li class="link-info">首頁 / </li>
                    <li class="link-info">商品專區 / </li>
                    <li class="link-danger">{{ filter }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <button class="input-group-text border-0 bg-light">
                    <i class="bi bi-search"></i>
                  </button>
                  <input type="text" class="form-control"
                  placeholder="進一步搜尋商品" aria-label="search" v-model="searchText"
                  @change="filtProducts(1)">
                </div>
              </div>
            </div>
          </section>

          <section class="mb-3">
            <div class="row">
              <div class="col-md-2">
                <div class="list-group text-center sticky-top" style="top: 70px;">
                  <button type="button" class="list-group-item list-group-item-action"
                  :class="{'active': filter == ''}" @click="changeFilter('')">全部商品</button>
                  <button type="button" class="list-group-item list-group-item-action"
                  :class="{'active': filter == '化妝品'}" @click="changeFilter('化妝品')">化妝品</button>
                  <button type="button" class="list-group-item list-group-item-action"
                  :class="{'active': filter == '醫藥'}" @click="changeFilter('醫藥')">醫藥</button>
                  <button type="button" class="list-group-item list-group-item-action"
                  :class="{'active': filter == '零食'}" @click="changeFilter('零食')">零食</button>
                </div>
              </div>
              <div class="col-md-10">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3"
                v-if="filtedProducts.length !== 0">
                  <div class="col" v-for="item in filtedProducts" :key="item.id">
                    <div class="card h-100">
                      <div class="position-absolute end-0" style="z-index: 2;">
                        <button type="button"
                        class="border-0 rounded"
                        style="background-color: rgba(255, 0, 0, 0.62);"
                        @click="toggleLoveProduct(item, 'add')" v-if="checkLoveList(item)">
                          <i class="bi bi-heart text-white fs-5"></i>
                          <span class="ms-1 text-white fs-5">加入收藏</span>
                        </button>
                        <button type="button"
                        class="border-0 rounded"
                        style="background-color: white;"
                        @click="toggleLoveProduct(item, 'del')" v-else>
                          <i class="bi bi-heart-fill text-danger fs-5"></i>
                          <span class="ms-1 text-danger fs-5">喜歡的商品</span>
                        </button>
                      </div>
                      <img :src="item.imageUrl"
                      class="card-img-top object-fit-cover" alt="..." style="height: 250px;">
                      <div class="card-body position-relative pb-0 border-top">
                        <p class="text-white bg-danger d-inline px-1 position-absolute top-0 end-0">
                          {{ item.category }}</p>
                        <h5 class="mt-2 overflow-hidden" style="height: 48px">{{ item.title }}</h5>
                        <p class="overflow-hidden" style="height: 70px">
                          {{ item.description }}</p>
                        <div class="d-flex justify-content-between align-items-end">
                          <span class="text-secondary fs-6 text-decoration-line-through">
                            原價{{ $filters.currency(item.origin_price) }}元</span>
                          <span class="text-danger fs-4">
                            售價{{ $filters.currency(item.price) }}元</span>
                        </div>
                      </div>
                      <div class="card-footer">
                        <a class="btn btn-outline-primary btn-sm stretched-link w-100" href="#"
                        @click.prevent="getProduct(item.id)">商品頁</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="d-flex text-secondary justify-content-center align-items-center mt-3">
                    <i class="bi bi-cloud-slash fs-1 me-3"></i>
                    <h5 class="text-center">歐歐~ 好像找不到相關的商品呢 ! <br>再試試看其他關鍵字吧 !</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PaginationModel :pages="pagination"
          @emit-pages="filtProducts"></PaginationModel>
        </div>
      </div>
    </div>

    <div class="fixed-cart">
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
    <div class="offcanvas offcanvas-start text-bg-danger" data-bs-scroll="true" tabindex="-1"
    id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"
    ref="offCanvas">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-center" id="offcanvasWithBothOptionsLabel">我的購物車</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <table class="table align-middle table-light">
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

      </div>
    </div>

    <div class="position-absolute top-0 bottom-0 d-none">
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
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';
import OffCanvas from 'bootstrap/js/dist/offcanvas';

export default {
  components: {
    PaginationModel,
  },
  data() {
    return {
      products: [],
      filtedProducts: [],
      cart: {
        carts: [],
      },
      loveItemList: {},
      pagination: {
        total_pages: '',
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
      filter: '',
      searchText: '',

      isLoading: false,
      status: {
        loadingItem: '', // 對應品項 id
      },
      offCanvas: {},
    };
  },
  inject: ['$httpMessageState'],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.filtProducts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filtProducts(page = 1) {
      if (this.filter === '') {
        this.filtedProducts = this.products.filter((i) => i.title.match(this.searchText));
      } else {
        this.filtedProducts = this.products.filter((i) => i.category === this.filter);
        this.filtedProducts = this.filtedProducts.filter((i) => i.title.match(this.searchText));
      }
      if (page === 'previous') {
        this.pagination.current_page -= 1;
      } else if (page === 'next') {
        this.pagination.current_page += 1;
      } else if (page === 1) {
        this.pagination.current_page = 1;
      } else {
        this.pagination.current_page = page;
      }

      const pageItems = 9;
      this.pagination.total_pages = Math.ceil(this.filtedProducts.length / pageItems);
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
      this.filtedProducts.forEach((item, i) => {
        if (i <= CP * 9 - 1 && i >= CP * 9 - 9) {
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
    changeFilter(sign) {
      this.filter = sign;
      this.filtProducts();
    },
    toggleCanvas() {
      this.offCanvas.show();
    },
  },
  mounted() {
    this.offCanvas = new OffCanvas(this.$refs.offCanvas);
  },
  created() {
    this.getProducts();
    this.getCart();
    this.updateLovedItem();
  },
};
</script>
