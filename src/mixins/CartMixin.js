export default {
  data() {
    return {
      cart: {
        carts: [],
      },
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '加入購物車');
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getCart();
  },
};
