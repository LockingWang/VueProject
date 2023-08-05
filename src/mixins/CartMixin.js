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
          if (res.data.success) {
            this.$httpMessageState('success', '成功加入購物車', '繼續購物吧 ~');
            this.getCart();
          } else {
            this.$httpMessageState('warning', '加入失敗', '請再試一次');
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生問題', '請聯繫工程師。');
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.$httpMessageState('warning', '取得購物車資料失敗', '請重新整理頁面');
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生問題', '請聯繫工程師。');
        });
    },
  },
  created() {
    this.getCart();
  },
};
