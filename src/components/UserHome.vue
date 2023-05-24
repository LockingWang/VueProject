<template>
    <header>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 3000, }"
        :loop="'true'"
        :speed="'1000'"
        :effect="'fade'"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <router-link to="/products">
            <img class="img-fluid"
            src="../../public/home-banner/home-advert.svg" alt="Home Banner">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/products">
            <img class="img-fluid"
            src="../../public/home-banner/home-coupon.svg" alt="Coupon Banner">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/product/-NTlu05E8NVhW9i0r6hc">
            <img class="img-fluid"
            src="../../public/home-banner/home-promo.svg" alt="Promotion Banner">
          </router-link>
        </swiper-slide>
        ...
      </swiper>
    </header>

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-9 position-relative">
          <div class="d-none d-md-block">
            <img class="img-fluid rounded-5" src="https://images.unsplash.com/photo-1572233052800-1394192b5404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Making Mocha">
          </div>
          <div class="rounded-5 p-3 user-home-intro">
            <h2 class="fw-bold" style="color: #9F353A;">關於DailyCheap</h2>
            <span style="color: #9F353A;">- 擁有最新的商品資訊，提供時下最熱門的商品。</span>

            <p class="mt-3 lh-lg">
              隨著日本旅遊的興盛，日本商品的競爭也越來越激烈，
              我們透過每天更新商品銷售資訊，掌握近期身受台灣人喜愛的日本商品，
              並提供這個平台給大家選購，讓在台灣的你們，也都能買到高品質、高人氣的商品喔!!!
            </p>
            <div class="text-end">
              <router-link class="fs-4"
              to="/products" style="color: #9F353A;">看一眼就好</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light">
      <div class="container p-md-5 py-5">
        <h2 class="display-4 text-center mb-4">人氣零食</h2>
        <SwiperItems class="container"
        :items="products.filter(i => i.category === '零食')"
        @changeProduct="toProductPage"></SwiperItems>
      </div>
    </div>

    <div class="container bg-white p-md-5 py-5">
        <h2 class="display-4 text-center mb-4">熱門藥妝</h2>
        <SwiperItems class="container"
        :items="products.filter(i => i.category === '醫藥')"
        @changeProduct="toProductPage"></SwiperItems>
    </div>

    <div class="bg-light py-3">
      <div class="container rounded home-coupon-banner py-3">
        <h3 class="display-6 text-white mb-3 text-center">現在完成首購，立享八折優惠 !</h3>
        <button type="button" @click="copyCouponCode('firstBuy80')">
          馬上領取 <i class="bi bi-hand-index-thumb-fill"></i></button>
        <p ref="cuponCode" class="position-absolute d-none">firstBuy80</p>
      </div>
    </div>

    <footer class="p-3" style="background-color: #ffe5e7; color: #86473F">
        <div class="container">
            <h2 class="display-6 text-center">聯絡資訊</h2>
            <div class="row justify-content-center my-2">
              <div class="col-12 col-md-4 text-center">
                <h3 class="h4">聯絡方式</h3>
                <ul class="list-unstyled">
                    <li><a class="text-decoration-none" style="color: #86473F;" href="#">
                        <i class="bi bi-envelope"></i> boom0525300@gmail.com
                    </a></li>
                    <li><a class="text-decoration-none" style="color: #86473F;" href="#">
                        <i class="bi bi-phone"></i> 0903-008-556
                    </a></li>
                </ul>
              </div>
              <div class="col-12 col-md-4 text-center">
                <h3 class="h4">社群軟體</h3>
                  <ul class="list-unstyled">
                      <li><a class="text-decoration-none" style="color: #86473F;" href="#">
                          <i class="bi bi-instagram"></i> boom_0525300
                      </a></li>
                      <li><a class="text-decoration-none" style="color: #86473F;" href="#">
                          <i class="bi bi-facebook"></i> CongRen Wang
                      </a></li>
                      <li><a class="text-decoration-none" style="color: #86473F;" href="#">
                          <i class="bi bi-youtube"></i> CongRen Wang
                      </a></li>
                  </ul>
              </div>
            </div>
        </div>
    </footer>
</template>

<script>
import SwiperItems from '@/components/SwiperItems.vue';

// import Swiper core and required modules
import {
  Pagination, A11y, Autoplay, EffectFade,
} from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  components: {
    SwiperItems,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
    };
  },
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
    toProductPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    copyCouponCode(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$httpMessageState('success', '已複製優惠碼', '歡迎光臨!');
        });
    },
  },
  created() {
    this.getProducts();
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y, Autoplay, EffectFade],
    };
  },
  inject: ['$httpMessageState'],
};
</script>
