<template>
      <UserNavBar class="fixed-top" />
      <div style="margin-top: 70px;">
        <router-view />
        <p class="text-center py-3 mb-0 bg-light">
          <i class="bi bi-pencil"></i>
          2023 by CongRen Wang 王琮仁.
          <br>
          created with Vue.
        </p>
      </div>
</template>

<script>
import emitter from '@/methods/emitter';
import $httpMessageState from '@/methods/pushMessageState';
import UserNavBar from '@/components/UserNavBar.vue';

export default {
  components: {
    UserNavBar,
  },
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
  methods: {
    toHomePage() {
      if (this.$route.fullPath === '/') {
        this.$router.push('/home');
      }
    },
  },
  created() {
    this.toHomePage();
  },
};
</script>
