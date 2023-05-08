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
                    <li class="link-danger ms-2">{{ filter }}</li>
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
                <div class="list-group text-center sticky-top mb-3" style="top: 70px;">
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
                    <div class="card h-100" :id="item.id">
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
                        style="background-color: rgba(255, 255, 255, 0.596);"
                        @click="toggleLoveProduct(item, 'del')" v-else>
                          <i class="bi bi-heart-fill text-danger fs-5"></i>
                          <span class="ms-1 text-danger fs-5">喜歡的商品</span>
                        </button>
                      </div>
                      <div class="img-box">
                        <div class="bg-img rounded-top"
                        :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"></div>
                      </div>
                      <div class="card-body position-relative pb-0 border-top">
                        <p class="text-white bg-danger d-inline px-1 position-absolute top-0 end-0">
                          {{ item.category }}</p>
                        <h5 class="mt-2 text-ellipsis-multi">{{ item.title }}</h5>
                        <div class="d-flex flex-wrap justify-content-between align-items-end">
                          <span class="text-secondary fs-6
                          text-decoration-line-through text-nowrap">
                            原價{{ $filters.currency(item.origin_price) }}元</span>
                          <span class="text-danger fs-5 text-nowrap">
                            售價{{ $filters.currency(item.price) }}元</span>
                        </div>
                      </div>
                      <div class="card-footer">
                        <a class="btn btn-outline-danger btn stretched-link w-100"
                        :data-id="item.id"
                        href="#" @click.prevent="getProduct(item.id)"
                        @focus="hoverEffect('in', $event)"
                        @focusout="hoverEffect('out', $event)"
                        @mouseenter="hoverEffect('in', $event)"
                        @mouseleave="hoverEffect('out', $event)">商品頁</a>
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

    <UserCart :cart="cart" @change-cart="getCart"></UserCart>
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';
import UserCart from '@/components/UserCartOffcanvas.vue';
import CartMixin from '@/mixins/CartMixin';
import ProductCard from '@/mixins/ProductCard';
import FiltedProducts from '@/mixins/FiltedProducts';

export default {
  components: {
    PaginationModel,
    UserCart,
  },
  data() {
    return {
      products: [],
      loveItemList: {},
      pageItems: 9,

      isLoading: false,
      status: {
        loadingItem: '', // 對應品項 id
      },
    };
  },
  inject: ['emitter', '$httpMessageState'],
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
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
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
  },
  created() {
    this.getProducts();
    this.updateLovedItem();
  },
  mixins: [CartMixin, ProductCard, FiltedProducts],
};
</script>
