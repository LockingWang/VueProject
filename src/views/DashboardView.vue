<template>
    <Narbar></Narbar>
    <div class="container-fluid" style="margin-top: 80px;">
        <ToastMessages></ToastMessages>
        <router-view></router-view>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Narbar from '@/components/NavBar.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';

export default {
  components: {
    Narbar,
    ToastMessages,
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
        if (!res.data.success) {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
</script>
