<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="bg-light">
      <div class="container pt-3">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb fs-5 ">
            <li class="breadcrumb-item"><router-link class="link-danger link-offset-2
              link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/user/home">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link class="link-danger link-offset-2
              link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/user/products">商品頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>

        <section class="bg-white p-3 mb-3">
          <div class="row">
            <div class="col-md-4 mb-3 border-bottom pb-3">
              <div class="img-box mb-1 position-relative">
                <LightBox :product="product"></LightBox>
                <div class="bg-img"
                :style="{ 'background-image': 'url(' + mainImgUrl + ')' }"></div>
              </div>

              <swiper
                :modules="modules"
                :slides-per-view="4"
                :space-between="5"
                navigation
                :scrollbar="{ draggable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="mb-2">
                  <swiper-slide>
                    <div class="img-box">
                      <div class="bg-img"
                      :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                      <a class="side-img-link"
                      @click.prevent="changeMainImg(product.imageUrl, $event)" href="#">主圖</a>
                    </div>
                  </swiper-slide>
                  <swiper-slide v-for="item in product.imagesUrl" :key="item">
                    <div class="img-box position-relative">
                      <div class="bg-img"
                      :style="{ 'background-image': 'url(' + item + ')' }"></div>
                      <a class="side-img-link"
                      @click.prevent="changeMainImg(item, $event)" href="#">主圖</a>
                    </div>
                  </swiper-slide>
              </swiper>

              <div class="row">
                <div class="col-sm-7 d-flex flex-wrap fs-4 justify-content-center">
                  <span>分享 : </span>
                  <button class="border-0 social-btn" @click="openSocialPage('fb')">
                    <i class="bi bi-facebook" style="color: #4267B2;"></i>
                  </button>
                  <button class="border-0 social-btn" @click="openSocialPage('ig')">
                    <i class="bi bi-instagram" style="color: #E1306C;"></i>
                  </button>
                  <button class="border-0 social-btn" @click="openSocialPage('twi')">
                    <i class="bi bi-twitter" style="color: #1DA1F2;"></i>
                  </button>
                  <button class="border-0 social-btn" @click="openSocialPage('line')">
                    <i class="bi bi-line" style="color: #06C755;"></i>
                  </button>
                </div>
                <div class="col-sm-5 text-center">
                  <button type="button"
                  class="border-0 rounded"
                  style="background-color: rgba(255, 0, 0, 0.62);"
                  @click="toggleLoveProduct(product, 'add')" v-if="checkLoveList(product)">
                    <i class="bi bi-heart text-white fs-5"></i>
                    <span class="ms-1 text-white fs-5 text-nowrap">加入收藏</span>
                  </button>
                  <button type="button"
                  class="btn btn-outline-danger rounded"
                  @click="toggleLoveProduct(product, 'del')" v-else>
                    <i class="bi bi-heart-fill"></i>
                    <span class="ms-1 text-nowrap">喜歡的商品</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="d-flex mb-3">
                <span class="bg-danger text-white px-1">{{ product.category }}</span>
                <h5 class="ms-3 mb-0">{{ product.title }}</h5>
              </div>

              <div class="d-flex">
                <p class="text-warning pe-4 border-end">
                  4.5
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </p>
                <p class="ps-4 pe-4 border-end text-decoration-underline">666 則評價</p>
                <p class="ps-4 text-decoration-underline">888 已售出</p>
              </div>

              <div class="bg-light p-3 d-flex align-items-center mb-3">
                <span class="text-secondary text-decoration-line-through">
                  原價 {{ $filters.currency(product.origin_price) }} NTD
                </span>
                <span class="text-danger fs-3 ms-3">
                  售價 {{ $filters.currency(product.price) }} NTD
                </span>
                <span class="bg-danger text-white px-1 ms-3">
                  {{ Math.ceil((product.price / product.origin_price) * 10) }}
                  折起
                </span>
              </div>

              <div class="row mb-3">
                <div class="col-3">
                  <p class="text-center">運送方式</p>
                </div>
                <div class="col-9 fs-5">
                  <p class="mb-0"><i class="bi bi-truck me-3"></i>宅配</p>
                  <p class="mb-0">
                    <i class="bi bi-7-square me-3" style="color: #F4811F;"></i>7-11
                  </p>
                  <p class="mb-0"><i class="bi bi-facebook me-3" style="color: #008163;"></i>全家</p>
                  <p class="mb-0"><i class="bi bi-shop me-3" style="color: red;"></i>OK超商</p>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-3">
                  <p class="text-center">數量</p>
                </div>
                <div class="col-9 fs-5">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="checkQty('minus')">
                      <i class="bi bi-dash"></i>
                    </button>
                    <input type="number" aria-label="item-number" min="1" v-model="qty"
                    class="text-center" @change="checkQty('input')"
                    style="width: 60px;">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="checkQty('add')">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>

                  <button type="button" class="btn btn-danger ms-3"
                  @click="addToCart(product.id, qty)">
                    <i class="bi bi-cart-plus-fill"></i>
                    加到購物車
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="bg-white p-3 mb-3">
          <div>
            <h5 class="bg-light p-3">商品說明</h5>
            <p class="descripe-preLine ps-3">{{ product.description }}</p>
          </div>
          <div>
            <h5 class="bg-light p-3">商品規格</h5>
            <p class="descripe-preLine ps-3">{{ product.content }}</p>
          </div>
        </section>

        <section class="bg-white p-4 mb-3">
          <h5>商品評價</h5>
          <div class="d-flex">
            <p class="text-danger pe-4">
              4.5
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </p>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://briian.com/wp-content/uploads/2018/11/oppaunniedoll_0.png);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">陳*漢</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  4.5
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-04-27 18:37 | 商品: {{ product.title }}</p>
              <p class="fs-5">
                商品出貨速度快,商品很超值又好用.,喜歡自己買來用吧！非常棒!
              </p>
            </div>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://assets.clibo.tw/images/commissions/grfpvm-06eK.jpeg?v=9324697e4e1aa1beefb0bcc06a5f7eac);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">艾*絲</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  5.0
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-03-16 09:03 | 商品: {{ product.title }}</p>
              <p class="fs-5">
                著半價打折買的 開架彩妝還77折 跟實體店面購買一樣 還有折價卷用下去 免運優惠 完全就是100分。
              </p>
            </div>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://i0.wp.com/kkplay3c.net/wp-content/uploads/irene/app/superme09.jpg);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">金*狼</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  4.0
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-01-27 00:48 | 商品: dejavu 就是自然輕盈眉彩膏(灰棕)</p>
              <p class="fs-5">
                包裝完整，商品正確無誤 ！dejavu眼膠筆非常好用已經回購了好幾次，不會暈！
              </p>
            </div>
          </div>
          <hr>
        </section>

        <section class="py-3 mb-3">
          <div class="d-flex justify-content-between">
            <p>逛逛賣場其他好物</p>
            <router-link to="/user/products" class="link-danger">
              查看全部
              <i class="bi bi-caret-right-fill"></i>
            </router-link>
          </div>

          <SwiperItems class="container"
          :items="products.filter(i => i.category === product.category)"
          @changeProduct="toProductPage"></SwiperItems>
        </section>

      </div>
      <section class="bg-white p-4 border-top border-danger border-3">
        <div class="row row-cols-1 row-cols-md-3 g-3">
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-calendar-check text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">15天保證到貨<br>自買方下單時間起算，15日內送達</p>
            </div>
          </div>
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-truck text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">優質運送服務<br>商品經妥善包裝與貼心運送，100%原況送到您手裡</p>
            </div>
          </div>
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-award text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">正品保障<br>商品皆本人自日本購入，杜絕盜版商品可能</p>
            </div>
          </div>
        </div>
      </section>
      <UserCart :cart="cart" @change-cart="getCart"></UserCart>
    </div>
</template>

<script>
import UserCart from '@/components/UserCartOffcanvas.vue';
import CartMixin from '@/mixins/CartMixin';
import SwiperItems from '@/components/SwiperItems.vue';
import LightBox from '@/components/LightBox.vue';

import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    UserCart,
    SwiperItems,
    LightBox,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1,
      mainImgUrl: '',
      loveItemList: {},

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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.product = res.data.product;
            this.mainImgUrl = this.product.imageUrl;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    toProductPage(item) {
      this.id = item.id;
      this.getProduct();
      this.getProducts();
      this.updateLovedItem();
      this.$router.push(`/user/product/${item.id}`);
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
    checkQty(sign) {
      if (sign === 'input') {
        if (this.qty < 1) {
          this.qty = 1;
        }
      }
      if (sign === 'minus') {
        if (this.qty > 1) {
          this.qty -= 1;
        }
      } else if (sign === 'add') {
        this.qty += 1;
      }
    },
    changeMainImg(imgUrl, event) {
      this.mainImgUrl = imgUrl;
      const sideImgLink = document.querySelectorAll('.side-img-link');
      sideImgLink.forEach((i) => {
        i.classList.remove('active');
      });
      event.target.classList.add('active');
    },
    openSocialPage(type) {
      let url = '';
      if (type === 'fb') {
        url = 'https://www.facebook.com/';
      } else if (type === 'ig') {
        url = 'https://www.instagram.com/';
      } else if (type === 'twi') {
        url = 'https://twitter.com/';
      } else if (type === 'line') {
        url = 'https://line.me/';
      }
      window.open(url);
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getProducts();
    this.updateLovedItem();
  },
  setup() {
    const onSwiper = () => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  mixins: [CartMixin],
};
</script>
