<template>
    <LoadingOverlay :active="isLoading" />
    <div class="row g-3 mt-3 justify-content-end">
      <div class="col-sm-2">
        <select class="form-select w-100" aria-label="Category"
        v-model="filter" @change="filtProducts(1)">
          <option value="" selected>全部</option>
          <option v-for="itemType in category" :key="itemType" :value="itemType">
            {{ itemType }}</option>
        </select>
      </div>
      <div class="col-sm-2 ms-3">
        <input type="text" class="form-control" placeholder="搜尋商品名稱"
        aria-label="search text" aria-describedby="search product"
        v-model="searchText" @change="textCheck">
        <span class="text-danger d-block text-center mb-3"
        :style="{opacity: specialText}">請勿輸入特殊字元</span>
      </div>
      <div class="col-sm-3">
        <button type="button" class="btn btn-primary w-100"
        @click="openModal(true)"><i class="bi bi-plus"></i>新增產品</button>
      </div>
    </div>
    <h2 class="text-center d-sm-none mt-3">產品列表</h2>
    <div class="overflow-auto">
      <table class="table mt-3">
        <thead class="text-nowrap">
            <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">商品狀態</th>
            <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filtedProducts" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
                {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">
                {{ $filters.currency(item.price) }}
            </td>
            <td>
                <span class="text-success" v-if="item.is_enabled">上架</span>
                <span class="text-danger" v-else>未上架</span>
            </td>
            <td>
                <div class="btn-group w-100">
                <button type="button" class="btn btn-outline-primary btn-sm text-nowrap"
                @click="openModal(false, item)">編輯</button>
                <button type="button" class="btn btn-outline-danger btn-sm text-nowrap"
                @click="openDelModal(item)">刪除</button>
                </div>
            </td>
            </tr>
        </tbody>
      </table>
    </div>

    <PaginationModel :pages="pagination" @emit-pages="filtProducts" />
    <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct" />
    <DelModal ref="delModal" :item="delItem" @del-item="deleteProduct" />
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationModel from '@/components/PaginationModel.vue';
import FiltedProducts from '@/mixins/FiltedProducts';

export default {
  data() {
    return {
      products: [],
      category: [],
      pageItems: 10,
      tempProduct: {},
      isNew: false,
      delItem: {},
      isLoading: false,
      specialText: 0,
    };
  },
  components: {
    ProductModal,
    DelModal,
    PaginationModel,
  },
  inject: ['emitter', '$httpMessageState'],
  watch: {
    products() {
      this.products.forEach((item) => {
        if (!this.category.includes(item.category)) {
          this.category.push(item.category);
        }
      });
    },
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = Object.values(res.data.products);
            this.filtProducts(this.pagination.current_page);
          } else {
            this.$httpMessageState('warning', '取得商品資料失敗', '請重新整理網頁。');
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
          imagesUrl: [],
          header: '新增產品',
        };
      } else {
        this.tempProduct = { ...item };
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
        }
        this.tempProduct.header = '編輯產品';
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
          if (res.data.success) {
            productComponent.hideModal();
            this.$httpMessageState('success', '更新成功', res.data.message);
            this.getProducts();
          } else {
            this.$httpMessageState('warning', '更新失敗', res.data.message);
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
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
            this.$httpMessageState('success', '刪除成功', res.data.message);
            this.getProducts();
          } else {
            this.$httpMessageState('warning', '刪除失敗', res.data.message);
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    textCheck() {
      const newText = this.searchText.replace(/[`~!@#$%^&*()+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '');
      if (newText !== this.searchText) {
        this.specialText = 1;
      } else {
        this.specialText = 0;
        this.filtProducts(1);
      }
    },
  },
  created() {
    this.getProducts();
  },
  mixins: [FiltedProducts],
};
</script>
