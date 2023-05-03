<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <nav class="navbar navbar-expand-lg shadow-sm px-3 manager-navbar">
        <div class="container-fluid">
          <router-link class="nav-link logo-indent" to="/user/home" style="width: 200px;">
            <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/cong-ren/1683082602645.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BCYzXPtK8OCGLNLZh2BHGdZ74Vlx04qpqSFQbmmsnLDY4IrqtfBQupiPSTm8I9cSDgDjot6y6A6BaGNrFZxT%2FRnxw1HDCKyU%2BjBSCbvqf3EAu78K4da4ldoHhGzWOxRDBCqm1ZQfuS4FEzY5KIgsjq7DHlfIHTKxGcpwzwVp4%2FGKCKdekqcUSN8yLt31QzC3orS5h8ZGA2WqfPHHLI6%2FTGJ9ZhJmYbZorKAcI%2BpDCXo6ScyQ98IbGRWQjD3NTEmAYapTcA9yPDoRUXhz86rrNWuRKTx8vctF5PfHeR3UkXJOvN15i8Rmw%2B%2F5zAGslc2OqTnKCgdShTjNmU7jy1sjHQ%3D%3D" alt="logo">
          </router-link>
          <button class="navbar-toggler" type="button" @click="toggleCollapse">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse pt-3" id="navbarNav" ref="collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style"
                  to="/dashboard/products">產品</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style"
                  to="/dashboard/orders">訂單</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <router-link class="nav-link nav-link-style"
                  to="/dashboard/coupons">優惠券</router-link>
                </li>
                <li class="nav-item nav-li text-center">
                  <a class="nav-link nav-link-style"
                  href="#" @click.prevent="logout">登出</a>
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
      isLoading: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapse = new Collapse(this.$refs.collapse);
      this.collapse.toggle();
    },
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.isLoading = true;
      this.$http.post(api, this.user)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.isLoading = false;
        });
    },
  },
};
</script>
