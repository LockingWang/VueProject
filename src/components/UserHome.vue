<template>
    <header class="min-vh-100 position-relative">
        <div class="deco-box top-0 start-0"></div>
        <div class="deco-box bottom-0 end-0"></div>
        <div class="position-absolute bg-cover bg-attach-fixed" style="top:30px; left:30px; bottom:30px; right: 30px; background-image: url(https://images.unsplash.com/photo-1538080764242-cdf6089d2a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);"></div>
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 class="display-1 fw-bold">我在日本</h1>
            <hr class="mb-1 mx-n3">
            <h2>懷念日本的伴手禮嗎 ?! 我幫你買!!!</h2>
            <p>只需在家選購，無論是藥妝還是零食，下訂後一週送到府 !</p>
        </div>
    </header>

    <div class="container py-5">
        <div class="row gy-3 justify-content-md-center flex-column flex-md-row-reverse">
            <div class="col-md-4">
                <img class="w-100 object-fit-cover" height="500" src="https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="airplane">
            </div>
            <div class="col-md-5 d-flex flex-column justify-content-center">
                <h2 class="display-4">自我介紹 : </h2>
                <p>
                    我是一位經常台灣、日本兩地跑的工作者，因為太常來來回回了(每週)，親友如果有想要買日本的商品，都會請我幫忙買回來，因此對代購這塊已經非常熟悉了。
                </p>
                <p>
                    某天突然想到，既然如此不如開放給更多有需要的人吧 ! 只要負擔一部份的代購費用，就可以買到台灣買不到的日本商品或以更優惠的價格買到喔~!!!
                </p>
                <router-link to="/user/products"
                class="btn btn-outline-primary mt-4 w-100">立即選購日本人氣商品(點擊前往)</router-link>
            </div>
        </div>
    </div>

    <div class="container bg-light p-md-5 py-5">
        <h2 class="display-4 text-center mb-4">人氣零食</h2>
        <SwiperItems class="container"
        :items="products.filter(i => i.category === '零食')"></SwiperItems>
    </div>

    <div class="container bg-white p-md-5 py-5">
        <h2 class="display-4 text-center mb-4">熱門藥妝</h2>
        <SwiperItems class="container"
        :items="products.filter(i => i.category === '醫藥')"></SwiperItems>
    </div>

    <footer class="bg-danger p-3 text-white">
        <div class="container">
            <h2 class="display-6 text-center">聯絡資訊</h2>
            <div class="row justify-content-center my-2">
              <div class="col-12 col-md-4 text-center">
                <h3 class="h4">聯絡方式</h3>
                <ul class="list-unstyled">
                    <li><a class="link-light text-decoration-none" href="#">
                        <i class="bi bi-envelope"></i> boom0525300@gmail.com
                    </a></li>
                    <li><a class="link-light text-decoration-none" href="#">
                        <i class="bi bi-phone"></i> 0903-008-556
                    </a></li>
                </ul>
              </div>
              <div class="col-12 col-md-4 text-center">
                <h3 class="h4">社群軟體</h3>
                  <ul class="list-unstyled">
                      <li><a class="link-light text-decoration-none" href="#">
                          <i class="bi bi-instagram"></i> boom_0525300
                      </a></li>
                      <li><a class="link-light text-decoration-none" href="#">
                          <i class="bi bi-facebook"></i> CongRen Wang
                      </a></li>
                      <li><a class="link-light text-decoration-none" href="#">
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

export default {
  components: {
    SwiperItems,
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
      this.$router.push(`/user/product/${item.id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
