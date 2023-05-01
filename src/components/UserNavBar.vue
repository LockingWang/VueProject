<template>
    <nav class="navbar navbar-expand-lg shadow px-3 user-navbar">
        <div class="container-fluid">
            <router-link class="nav-link logo-indent" to="/user/home" style="width: 200px;">
              <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/cong-ren/1682747176528.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E%2BMdiy13jV6qHkCRifNdi5Cwt5RBDIB0ZPrYWg72020rPNB6AEI4nI4P6xG1WI0j%2Bx7bnBQ99LmNqMoqc%2B8Q4Vur1vdo8PiOsf9FRXJtyVc8O0roF82HQKN9gWQgm0cYoRsrnildZsfudvwLiphyTI0dzdhiemBvUe43JAotEiQgZOHOvn7X4j02oakUNa0RuyDrBXtTjtizOAufPepvG45%2ByiwGUzlSb%2F50K2LZe%2BvPrTXOECtQ8isC7WTwkSOSN%2F043nCnBRT77BkB%2FlgAwT5%2Bc6CHh7kWu1DitSIiVw6CtUjhT%2Fo1e4UJFWV6x1QN%2FcEQI4G0HDJVPhsKF%2B5JIg%3D%3D" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" @click="toggleCollapse">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse pt-3" id="navbarNav" ref="collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style" to="/user/home"
                  @click="activeLink">首頁</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style" to="/user/products"
                  @click="activeLink">商品頁</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style" to="/user/favorite"
                  @click="activeLink">我的最愛</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style" to="/user/userCheckout/cart"
                  @click="activeLink">購物車</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style" to="/user/searchOrder"
                  @click="activeLink">訂單查詢</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      collapse: {},
    };
  },
  methods: {
    toggleCollapse() {
      this.collapse = new Collapse(this.$refs.collapse);
      this.collapse.toggle();
    },
    activeLink(e) {
      const navLink = document.querySelectorAll('.nav-link');
      navLink.forEach((item) => {
        if (item === e.target) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    },
  },
};
</script>
