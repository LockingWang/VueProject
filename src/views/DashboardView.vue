<template>
    <Narbar />
    <div class="container-fluid" style="margin-top: 80px;">
        <router-view />
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Narbar from '@/components/NavBar.vue';
import $httpMessageState from '@/methods/pushMessageState';

export default {
  components: {
    Narbar,
  },
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        if (res.data.success) {
          if (this.$route.fullPath === '/dashboard') {
            this.$router.push('/dashboard/products');
          }
        } else {
          this.$router.push('/login');
        }
      });
  },
};
</script>
