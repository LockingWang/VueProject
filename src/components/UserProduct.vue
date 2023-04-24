<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-8">
          <h2>{{ product.title }}</h2>
          <div>{{ product.content }}</div>
          <div>{{ product.description }}</div>
          <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
        </article>
        <div class="col-4">
          <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
          <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
          <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
          <hr>
          <div class="mb-3">
            <label class="form-label" for="itemNumber">數量 :
              <input class="form-control" type="number" min="1" id="itemNumber" v-model="qty">
            </label>
          </div>
          <button type="button" class="btn btn-outline-danger"
                  @click="addToCart(product.id)">
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  data() {
    return {
      product: {},
      id: '',
      qty: 1,
    };
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.product = res.data.product;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.id,
        qty: this.qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '加入購物車');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
