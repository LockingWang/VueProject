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
      test: {
        apple: 'apple',
      },
    };
  },
  // inject: ['$httpMessageState'],
  methods: {
    // getOrder() {
    //   const url = `${process.env.VUE_APP_API}api
    // /${process.env.VUE_APP_PATH}/order/${this.orderId}`;
    //   this.isLoading = true;
    //   this.$http.get(url)
    //     .then((res) => {
    //       this.isLoading = false;
    //       if (res.data.success) {
    //         this.order = res.data.order;
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },
    // payOrder() {
    //   const url = `${process.env.VUE_APP_API}api
    // /${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
    //   this.isLoading = true;
    //   this.$http.post(url)
    //     .then((res) => {
    //       this.isLoading = false;
    //       if (res.data.success) {
    //         this.$httpMessageState(res, '付款');
    //         this.getOrder();
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    // },
  },
  created() {
    // this.orderId = this.$route.params.orderId;
    // this.getOrder();
  },
};
</script>
