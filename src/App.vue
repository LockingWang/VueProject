<template>
    <router-view/>
    <ToastMessages/>
    <TopButton/>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';
import $httpMessageState from '@/methods/pushMessageState';
import TopButton from '@/components/BackToTop.vue';

export default {
  components: {
    ToastMessages,
    TopButton,
  },
  provide() {
    return {
      $httpMessageState,
      emitter,
    };
  },
};

</script>

<style lang="scss">
@import "./assets/all";

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;900&display=swap');
</style>
