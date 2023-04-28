<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="bg-light">
      <div class="container pt-3">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb fs-5 ">
            <li class="breadcrumb-item"><router-link class="link-danger link-offset-2
              link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/user/home">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link class="link-danger link-offset-2
              link-underline-opacity-25 link-underline-opacity-100-hover"
              to="/user/products">商品頁</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>

        <section class="bg-white p-3 mb-3">
          <div class="row">
            <div class="col-md-4 mb-3 border-bottom pb-3">
              <div class="img-box mb-1">
                <div class="bg-img"
                :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
              </div>

              <div class="row g-0 justify-content-between mb-2">
                <div class="col-2">
                  <div class="img-box">
                    <div class="bg-img"
                    :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="img-box">
                    <div class="bg-img"
                    :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="img-box">
                    <div class="bg-img"
                    :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="img-box">
                    <div class="bg-img"
                    :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="img-box">
                    <div class="bg-img"
                    :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"></div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-7 d-flex flex-wrap fs-4 justify-content-center">
                  <span>分享 : </span>
                  <button class="border-0" style="background: transparent;">
                    <i class="bi bi-facebook" style="color: #4267B2;"></i>
                  </button>
                  <button class="border-0" style="background: transparent;">
                    <i class="bi bi-instagram" style="color: #E1306C;"></i>
                  </button>
                  <button class="border-0" style="background: transparent;">
                    <i class="bi bi-twitter" style="color: #1DA1F2;"></i>
                  </button>
                  <button class="border-0" style="background: transparent;">
                    <i class="bi bi-line" style="color: #06C755;"></i>
                  </button>
                </div>
                <div class="col-sm-5 text-center">
                  <button type="button"
                  class="border-0 rounded"
                  style="background-color: rgba(255, 0, 0, 0.62);"
                  @click="toggleLoveProduct(product, 'add')" v-if="checkLoveList(product)">
                    <i class="bi bi-heart text-white fs-5"></i>
                    <span class="ms-1 text-white fs-5 text-nowrap">加入收藏</span>
                  </button>
                  <button type="button"
                  class="btn btn-outline-danger rounded"
                  @click="toggleLoveProduct(product, 'del')" v-else>
                    <i class="bi bi-heart-fill"></i>
                    <span class="ms-1 text-nowrap">喜歡的商品</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="d-flex mb-3">
                <span class="bg-danger text-white px-1">{{ product.category }}</span>
                <h5 class="ms-3 mb-0">{{ product.title }}</h5>
              </div>

              <div class="d-flex">
                <p class="text-warning pe-4 border-end">
                  4.5
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </p>
                <p class="ps-4 pe-4 border-end text-decoration-underline">666 則評價</p>
                <p class="ps-4 text-decoration-underline">888 已售出</p>
              </div>

              <div class="bg-light p-3 d-flex align-items-center mb-3">
                <span class="text-secondary text-decoration-line-through">
                  原價 {{ $filters.currency(product.origin_price) }} NTD
                </span>
                <span class="text-danger fs-3 ms-3">
                  售價 {{ $filters.currency(product.price) }} NTD
                </span>
                <span class="bg-danger text-white px-1 ms-3">
                  {{ Math.ceil((product.price / product.origin_price) * 10) }}
                  折起
                </span>
              </div>

              <div class="row mb-3">
                <div class="col-3">
                  <p class="text-center">運送方式</p>
                </div>
                <div class="col-9 fs-5">
                  <p class="mb-0"><i class="bi bi-truck me-3"></i>宅配</p>
                  <p class="mb-0">
                    <i class="bi bi-7-square me-3" style="color: #F4811F;"></i>7-11
                  </p>
                  <p class="mb-0"><i class="bi bi-facebook me-3" style="color: #008163;"></i>全家</p>
                  <p class="mb-0"><i class="bi bi-shop me-3" style="color: red;"></i>OK超商</p>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-3">
                  <p class="text-center">數量</p>
                </div>
                <div class="col-9 fs-5">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="checkQty('minus')">
                      <i class="bi bi-dash"></i>
                    </button>
                    <input type="number" aria-label="item-number" min="1" v-model="qty"
                    class="text-center" @change="checkQty('input')"
                    style="width: 60px;">
                    <button type="button" class="btn btn-outline-secondary"
                    @click="checkQty('add')">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>

                  <button type="button" class="btn btn-danger ms-3"
                  @click="addToCart(product.id)">
                    <i class="bi bi-cart-plus-fill"></i>
                    加到購物車
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="bg-white p-3 mb-3">
          <div>
            <h5 class="bg-light p-3">商品說明</h5>
            <p>{{ product.description }}</p>
          </div>
          <div>
            <h5 class="bg-light p-3">商品規格</h5>
            <p style="white-space: pre-line;">{{ product.content }}</p>
          </div>
        </section>

        <section class="bg-white p-4 mb-3">
          <h5>商品評價</h5>
          <div class="d-flex">
            <p class="text-danger pe-4">
              4.5
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </p>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://briian.com/wp-content/uploads/2018/11/oppaunniedoll_0.png);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">陳*漢</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  4.5
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-04-27 18:37 | 商品: {{ product.title }}</p>
              <p class="fs-5">
                商品出貨速度快,商品很超值又好用.,喜歡自己買來用吧！非常棒!
              </p>
            </div>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://assets.clibo.tw/images/commissions/grfpvm-06eK.jpeg?v=9324697e4e1aa1beefb0bcc06a5f7eac);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">艾*絲</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  5.0
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-03-16 09:03 | 商品: {{ product.title }}</p>
              <p class="fs-5">
                著半價打折買的 開架彩妝還77折 跟實體店面購買一樣 還有折價卷用下去 免運優惠 完全就是100分。
              </p>
            </div>
          </div>
          <hr>

          <div class="row justify-content-center mb-3">
            <div class="col-md-2 col-sm-10">
              <div class="img-box border-0">
                <div class="bg-img rounded-circle"
                style="background-image: url(https://i0.wp.com/kkplay3c.net/wp-content/uploads/irene/app/superme09.jpg);"></div>
              </div>
            </div>

            <div class="col-md-10">
              <p class="mb-0 fs-5">金*狼</p>
              <div class="d-flex fs-5">
                <p class="text-danger pe-4 mb-0">
                  4.0
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                </p>
              </div>
              <p class="text-secondary fs-6">2023-01-27 00:48 | 商品: dejavu 就是自然輕盈眉彩膏(灰棕)</p>
              <p class="fs-5">
                包裝完整，商品正確無誤 ！dejavu眼膠筆非常好用已經回購了好幾次，不會暈！
              </p>
            </div>
          </div>
          <hr>
        </section>

        <section class="py-3 mb-3">
          <div class="d-flex justify-content-between">
            <p>逛逛賣場其他好物</p>
            <router-link to="/user/products" class="link-danger">
              查看全部
              <i class="bi bi-caret-right-fill"></i>
            </router-link>
          </div>

          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-2 flex-nowrap overflow-hidden">
            <div class="col" v-for="(item) in products.filter(i => i.category === '零食')"
            :key="item.id">
              <div class="card h-100 border border-5">
                <img :src="item.imageUrl" class="card-img-top object-fit-contain"
                style="max-height: 300px;" alt="...">
                <div class="card-body border-top d-flex flex-column">
                    <h5 class="card-title text-center d-block">{{ item.title }}</h5>
                    <a href="#"
                    class="btn btn-outline-danger stretched-link d-block mt-auto"
                    @click.prevent="toProductPage(item)">看更多</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <section class="bg-white p-4 border-top border-danger border-3">
        <div class="row row-cols-1 row-cols-md-3 g-3">
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-calendar-check text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">15天保證到貨<br>自買方下單時間起算，15日內送達</p>
            </div>
          </div>
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-truck text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">優質運送服務<br>商品經妥善包裝與貼心運送，100%原況送到您手裡</p>
            </div>
          </div>
          <div class="col d-flex justify-content-md-center">
            <i class="bi bi-award text-danger fs-2"></i>
            <div class="ms-2 text-secondary">
              <p class="mb-0">正品保障<br>商品皆本人自日本購入，杜絕盜版商品可能</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="fixed-cart">
      <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasWithBothOptions"
      role="button" aria-controls="offcanvasExample">
        <img src="https://img-bsy.txrpic.com/preview/Element/00/00/96/60/E-966041-F44B8F15.png?imageMogr2/quality/90/thumbnail/!800x%3E" alt="cart"
        class="img-fluid">
        <span class="position-absolute start-50 translate-middle badge rounded-pill bg-info"
        style="top: 10%;">
          {{ cart.carts.length }}
        </span>
      </a>
    </div>
    <div class="offcanvas offcanvas-start text-bg-danger" data-bs-scroll="true" tabindex="-1"
    id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"
    ref="offCanvas">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-center" id="offcanvasWithBothOptionsLabel">我的購物車</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <table class="table align-middle table-light">
          <thead>
            <tr>
              <th>刪除</th>
              <th>品名</th>
              <th style="width: 120px">數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
          <template v-if="cart.carts.length">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                        @click="removeCartItem(item.id)">
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control" aria-label="buy number"
                        v-model.number="item.qty" min="1"
                        @change="updateCart(item)"
                        :disabled="this.status.loadingItem === item.id">
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
              </td>
              <td class="text-end">
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                {{ $filters.currency(item.final_total) }}
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td colspan="4" class="text-center">尚未加入任何商品</td>
            </tr>
          </template>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="2">
              <button type="button" class="btn btn-outline-danger"
                      @click="removeCartItem('all')">清空購物車</button>
            </td>
            <td colspan="1" class="text-end">總計</td>
            <td class="text-end">{{ $filters.currency(cart.total) }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
          </tr>
          </tfoot>
        </table>

      </div>
    </div>
</template>

<script>
import OffCanvas from 'bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1,
      loveItemList: {},

      status: {
        loadingItem: '', // 對應品項 id
      },
      cart: {
        carts: [],
      },
      offCanvas: {},
    };
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    toProductPage(item) {
      this.id = item.id;
      this.getProduct();
      this.getProducts();
      this.updateLovedItem();
      this.$router.push(`/user/product/${item.id}`);
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
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart })
        .then(() => {
          this.isLoading = false;
          this.status.loadingItem = '';
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    removeCartItem(id) {
      let target = 'carts';
      if (id !== 'all') {
        target = `cart/${id}`;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/${target}`;
      this.isLoading = true;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    toggleCanvas() {
      this.offCanvas.show();
    },
    toggleLoveProduct(item, sign) {
      if (sign === 'add') {
        this.loveItemList[item.id] = item;
        localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
      } else if (sign === 'del') {
        delete this.loveItemList[item.id];
        localStorage.setItem('loveItemList', JSON.stringify(this.loveItemList));
      }
    },
    checkLoveList(item) {
      if (this.loveItemList[item.id] === undefined) {
        return true;
      }
      return false;
    },
    updateLovedItem() {
      if (!localStorage.getItem('loveItemList')) {
        this.loveItemList = {};
      } else {
        this.loveItemList = JSON.parse(localStorage.getItem('loveItemList'));
      }
    },
    checkQty(sign) {
      if (sign === 'input') {
        if (this.qty < 1) {
          this.qty = 1;
        }
      }
      if (sign === 'minus') {
        if (this.qty > 1) {
          this.qty -= 1;
        }
      } else if (sign === 'add') {
        this.qty += 1;
      }
    },
  },
  mounted() {
    this.offCanvas = new OffCanvas(this.$refs.offCanvas);
  },
  created() {
    this.id = this.$route.params.productId;
    this.getCart();
    this.getProduct();
    this.getProducts();
    this.updateLovedItem();
  },
};
</script>
