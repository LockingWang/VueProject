<template>
  <LoadingOverlay :active="isLoading" />
  <div class="container-fluid">

    <div class="row g-3 mt-3 justify-content-end">

      <div class="col-sm-4">
        <div class="input-group">
          <select class="form-select" aria-label="Category"
          v-model="filter" @change="filtOrders(1)">
            <option value="" selected>搜尋條件</option>
            <option value="id" selected>訂單編號</option>
            <option value="name" selected>姓名</option>
            <option value="tel" selected>電話</option>
            <option value="email" selected>Email</option>
          </select>
          <input type="text" class="form-control" placeholder="搜尋關鍵字"
          aria-label="search text" aria-describedby="search order"
          v-model="searchText" @change="textCheck()" :disabled="this.filter === ''">
        </div>
        <span class="text-danger d-block text-end mb-3"
        :style="{opacity: specialText}">請勿輸入特殊字元</span>
      </div>

      <div class="col-sm-3">
        <button type="button" class="btn btn-danger w-100"
        @click="openDelModal('all')">刪除全部訂單</button>
      </div>

    </div>

    <div class="overflow-auto">
      <table class="table mt-4 text-nowrap">
        <thead>
            <tr>
            <th>訂單編號</th>
            <th>訂單成立時間</th>
            <th>訂購人</th>
            <th>訂單金額</th>
            <th>付款狀態</th>
            <th>編輯</th>
            </tr>
        </thead>
        <tbody v-if="filtedOrders.length !== 0">
            <tr v-for="order in filtedOrders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ $filters.inputDateType(order.create_at) }}</td>
              <td>{{ order.user.name }}</td>
              <td>{{ $filters.currency(order.total) }}</td>
              <td>
                  <span class="text-success" v-if="order.is_paid">已付款</span>
                  <span class="text-muted" v-else>未付款</span>
              </td>
              <td>
                  <div class="btn-group w-100">
                    <button type="button" class="btn btn-outline-primary btn-sm text-nowrap"
                    @click="openModal(order)">編輯</button>
                    <button type="button" class="btn btn-outline-danger btn-sm text-nowrap"
                    @click="openDelModal(order)">刪除</button>
                  </div>
              </td>
            </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6" class="text-center text-secondary">歐歐~ 我們查不到有相關的訂單內 !</td>
          </tr>
        </tbody>
      </table>
    </div>

    <PaginationModel :pages="pagination" @emit-pages="filtOrders" />

    <OrderModal ref="orderModal" :order="tempOrder" @update-order="updateOrder" />

    <DelModal ref="delModal" :item="delOrder" @del-item="deleteOrder" @del-all="deleteAll" />
  </div>
</template>

<script>
import PaginationModel from '@/components/PaginationModel.vue';
import OrderModal from '@/components/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    PaginationModel,
    OrderModal,
    DelModal,
  },
  data() {
    return {
      orders: [],
      allOrders: [],
      filtedOrders: [],
      pageOrders: 10,
      tempOrder: {},
      delOrder: {},
      isLoading: false,
      pagination: {
        total_pages: '',
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
      filter: '',
      searchText: '',
      specialText: 0,
    };
  },
  methods: {
    getTotalPages(currentPage = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.allOrders = [];
            this.getAllOrders(res.data.pagination.total_pages, currentPage, 1);
          } else {
            this.$httpMessageState('warning', '取得資料失敗', '請重新整理頁面。');
          }
        })
        .catch(() => {
          this.$httpMessageState('warning', '系統錯誤', '請洽工程師。');
        });
    },
    getAllOrders(totalPage, currentPage, loadingPage) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${loadingPage}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.allOrders = this.allOrders.concat(res.data.orders);
            if (res.data.pagination.current_page < totalPage) {
              this.getAllOrders(totalPage, currentPage, loadingPage + 1);
            } else {
              this.isLoading = false;
              this.filtOrders(currentPage);
            }
          } else {
            this.$httpMessageState('warning', '取得資料失敗', '請重新整理頁面。');
          }
        })
        .catch(() => {
          this.$httpMessageState('warning', '系統錯誤', '請洽工程師。');
        });
    },
    filtOrders(page = 1) {
      if (this.filter === 'id') {
        this.filtedOrders = this.allOrders.filter((i) => i.id.match(this.searchText));
      } else if (this.filter === 'name') {
        this.filtedOrders = this.allOrders.filter((i) => i.user.name.match(this.searchText));
      } else if (this.filter === 'tel') {
        this.filtedOrders = this.allOrders.filter((i) => i.user.tel.match(this.searchText));
      } else if (this.filter === 'email') {
        this.filtedOrders = this.allOrders.filter((i) => i.user.email.match(this.searchText));
      } else {
        this.filtedOrders = this.allOrders;
        this.searchText = '';
      }

      if (page === 'previous') {
        this.pagination.current_page -= 1;
      } else if (page === 'next') {
        this.pagination.current_page += 1;
      } else if (page === 1) {
        this.pagination.current_page = 1;
      } else {
        this.pagination.current_page = page;
      }

      this.pagination.total_pages = Math.ceil(this.filtedOrders.length / this.pageOrders);
      if (this.pagination.current_page === 1) {
        this.pagination.has_pre = false;
        this.pagination.has_next = true;
        if (this.pagination.total_pages === 1) {
          this.pagination.has_next = false;
        }
      } else if (this.pagination.current_page === this.pagination.total_pages) {
        this.pagination.has_next = false;
        this.pagination.has_pre = true;
      } else {
        this.pagination.has_next = true;
        this.pagination.has_pre = true;
      }
      const showOrders = [];
      const CP = this.pagination.current_page;
      this.filtedOrders.forEach((item, i) => {
        if (i <= CP * this.pageOrders - 1 && i >= CP * this.pageOrders - this.pageOrders) {
          showOrders.push(item);
        }
      });
      this.filtedOrders = showOrders;
    },
    openModal(order) {
      this.tempOrder = JSON.parse(JSON.stringify(order));
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    updateOrder(tempOrder) {
      const orderComponent = this.$refs.orderModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`;
      this.isLoading = true;
      this.$http.put(api, { data: tempOrder })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            orderComponent.hideModal();
            this.$httpMessageState('success', '更新成功', res.data.message);
            this.allOrders = [];
            this.getAllOrders(this.pagination.total_pages, this.pagination.current_page, 1);
          } else {
            this.$httpMessageState('warning', '更新失敗', '請重新檢查內容，並再次嘗試。');
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    openDelModal(order) {
      if (order === 'all') {
        this.delOrder = {
          title: '全部訂單',
        };
      } else {
        this.delOrder = order;
        this.delOrder.title = `訂單${order.id}`;
      }
      const orderComponent = this.$refs.delModal;
      orderComponent.showModal();
    },
    deleteOrder() {
      const orderComponent = this.$refs.delModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.delOrder.id}`;
      this.isLoading = true;

      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.getTotalPages(this.pagination.current_page);
            orderComponent.hideModal();
            this.$httpMessageState('success', '刪除訂單成功', res.data.message);
          } else {
            this.$httpMessageState('warning', '刪除訂單失敗', res.data.message);
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    deleteAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      const orderComponent = this.$refs.delModal;
      this.$http.delete(api)
        .then((res) => {
          orderComponent.hideModal();
          if (res.data.success) {
            this.$httpMessageState('success', '成功清空訂單', '讓我們重新開始吧 !');
            this.getTotalPages(this.pagination.current_page);
          } else {
            this.$httpMessageState('warning', '刪除全部訂單失敗', res.data.message);
          }
        })
        .catch(() => {
          orderComponent.hideModal();
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    textCheck() {
      const newText = this.searchText.replace(/[`~!#$%^&*()+=<>?:"{}|,./;'\\[\]·~！#￥%……&*（）——+={}|《》？：“”【】、；‘’，。、]/g, '');
      if (newText !== this.searchText) {
        this.specialText = 1;
      } else {
        this.specialText = 0;
        this.filtOrders(1);
      }
    },
  },
  created() {
    this.getTotalPages(1);
  },
  inject: ['emitter', '$httpMessageState'],
};
</script>
