<template>
      <UserNavBar></UserNavBar>
      <div class="container-fluid">
        <ToastMessages></ToastMessages>
        <router-view></router-view>
      </div>
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
