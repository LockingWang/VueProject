<template>
      <UserNavBar class="fixed-top"></UserNavBar>
      <div style="margin-top: 60px;">
        <router-view></router-view>
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
