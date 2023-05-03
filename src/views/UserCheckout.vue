<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
};
</script>
