<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
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
                {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">
                {{ $filters.currency(item.price) }}
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
    <PaginationModel :pages="pagination"
      @emit-pages="getProducts"></PaginationModel>
    <ProductModal ref="productModal"
                  :product="tempProduct"
                  @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal"
              :item="delItem"
              @del-item="deleteProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationModel from '@/components/PaginationModel.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
      },
      isNew: false,
      delItem: {},
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    PaginationModel,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      let toPage = '';
      if (page === 'previous' && this.pagination.has_pre) {
        toPage = this.pagination.current_page - 1;
      } else if (page === 'next' && this.pagination.has_next) {
        toPage = this.pagination.current_page + 1;
      } else {
        toPage = page;
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${toPage}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
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
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          this.isLoading = false;
          productComponent.hideModal();
          if (res.data.success) {
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、'),
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.delItem.id}`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            const productComponent = this.$refs.delModal;
            productComponent.hideModal();
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'warning',
              title: '刪除成功',
            });
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
