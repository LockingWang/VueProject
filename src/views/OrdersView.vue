<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container-fluid">
    <div class="text-end mt-3 pe-5">
      <button type="button" class="btn btn-danger" @click="openDelModal('all')">刪除全部訂單</button>
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
        <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ $filters.date(order.create_at * 1000) }}</td>
              <td>{{ order.user.name }}</td>
              <td>{{ $filters.currency(order.total) }}</td>
              <td>
                  <span class="text-success" v-if="order.is_paid">已付款</span>
                  <span class="text-muted" v-else>未付款</span>
              </td>
              <td>
                  <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm text-nowrap"
                    @click="openModal(order)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm text-nowrap"
                    @click="openDelModal(order)">刪除</button>
                  </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>

    <PaginationModel :pages="pagination"
    @emit-pages="getOrders"></PaginationModel>

    <OrderModal ref="orderModal"
    :order="tempOrder"
    @update-order="updateOrder"></OrderModal>

    <DelModal ref="delModal"
    :item="delOrder"
    @del-item="deleteOrder"
    @del-all="deleteAll"></DelModal>
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
      tempOrder: {},
      delOrder: {},
      isLoading: false,
      pagination: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      let toPage = '';
      if (page === 'previous' && this.pagination.has_pre) {
        toPage = this.pagination.current_page - 1;
      } else if (page === 'next' && this.pagination.has_next) {
        toPage = this.pagination.current_page + 1;
      } else {
        toPage = page;
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${toPage}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          console.log('err', err);
          this.isLoading = false;
        });
    },
    openModal(order) {
      this.tempOrder = { ...order };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    updateOrder(tempOrder) {
      const orderComponent = this.$refs.orderModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`;
      this.isLoading = true;
      this.$http.put(api, { data: this.tempOrder })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            orderComponent.hideModal();
            this.$httpMessageState(res, '更新', '可以繼續管理訂單囉!');
            this.getOrders();
          } else {
            this.$httpMessageState(res, '更新');
          }
        })
        .catch(() => {
          this.isLoading = false;
          const errMessage = {
            data: {
              message: '發生錯誤，請聯繫工程師。',
            },
          };
          this.$httpMessageState(errMessage, '更新');
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
            this.getOrders();
            orderComponent.hideModal();
            this.emitter.emit('push-message', {
              style: 'warning',
              title: '訂單刪除成功',
              content: '繼續管理訂單',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '訂單刪除失敗',
              content: res.data.message,
            });
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '訂單刪除失敗',
            content: '發生錯誤，請洽工程師',
          });
        });
    },
    deleteAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      const orderComponent = this.$refs.delModal;
      this.$http.delete(api)
        .then((res) => {
          orderComponent.hideModal();
          if (res.data.success) {
            this.$httpMessageState(res, '刪除全部訂單', '糟糕沒訂單了~!');
            this.getOrders();
          } else {
            this.$httpMessageState(res, '刪除全部訂單');
          }
        })
        .catch(() => {
          orderComponent.hideModal();
          const errMessage = {
            data: {
              message: '發生錯誤，請洽工程師。',
            },
          };
          this.$httpMessageState(errMessage, '刪除全部訂單');
        });
    },
  },
  created() {
    this.getOrders();
  },
  inject: ['emitter', '$httpMessageState'],
};
</script>
