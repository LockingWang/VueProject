<template>
      <UserNavBar class="fixed-top"></UserNavBar>
      <div style="margin-top: 55px;">
        <router-view></router-view>
        <p class="text-center py-3 mb-0 bg-light">
          <i class="bi bi-pencil"></i>
          2023 by CongRen Wang 王琮仁.
          <br>
          created with Vue.
        </p>
      </div>
      <ToastMessages></ToastMessages>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';
import UserNavBar from '@/components/UserNavBar.vue';

export default {
  components: {
    ToastMessages,
    UserNavBar,
  },
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
};
</script>
