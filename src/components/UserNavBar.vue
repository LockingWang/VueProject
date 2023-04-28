<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <router-link class="nav-link text-danger" to="/user/home">日本代購網</router-link>
            <button class="navbar-toggler" type="button" @click="toggleCollapse">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" ref="collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/home">首頁</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/products">商品頁</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/favorite">我的最愛</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/userCheckout/cart">購物車</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/searchOrder">訂單查詢</router-link>
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
  },
};
</script>
