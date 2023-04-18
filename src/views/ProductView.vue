<template>
    <text class="text-end">
        <button type="button" class="btn btn-primary"
        @click="openModal(true)">新增產品</button>
    </text>
    <table class="table mt-4">
        <thead>
            <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td class="text-right">
                {{ item.origin_price }}
            </td>
            <td class="text-right">
                {{ item.price }}
            </td>
            <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
                <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)">刪除</button>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
    <ProductModal ref="productModal"
                  :product="tempProduct"
                  @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal"
              :item="delItem"
              @del-item="deleteProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
      },
      isNew: false,
      delItem: {},
    };
  },
  components: {
    ProductModal,
    DelModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    openDelModal(item) {
      this.delItem = item;
      const productComponent = this.$refs.delModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res);
          productComponent.hideModal();
          this.getProducts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.delItem.id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            const productComponent = this.$refs.delModal;
            productComponent.hideModal();
            this.getProducts();
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
