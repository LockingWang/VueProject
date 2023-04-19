<template>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">客戶端頁面</a>
        </div>
      </nav>
      <div class="container-fluid">
        <ToastMessages></ToastMessages>
        <router-view></router-view>
      </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import $httpMessageState from '@/methods/pushMessageState';

export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
};
</script>
