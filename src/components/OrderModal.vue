<template>
    <div class="modal fade" ref="modal">
      <LoadingOverlay :active="isLoading"></LoadingOverlay>
      <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                    <span>編輯訂單 ( 訂單編號: {{ tempOrder.id }} )</span>
                </h5>
                <button type="button" class="btn-close"
                        data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row gy-3 gy-lg-1">
                    <div class="col-lg-4 border-end">
                        <h5 class="text-danger">訂購人資訊</h5>

                        <label for="user-name" class="form-label w-100">姓名
                            <input type="text" class="form-control" id="user-name"
                            v-model="tempOrder.user.name">
                        </label>

                        <label for="user-tel" class="form-label w-100">電話
                            <input type="text" class="form-control" id="user-tel"
                            v-model="tempOrder.user.tel">
                        </label>

                        <label for="user-address" class="form-label w-100">地址
                            <input type="text" class="form-control" id="user-address"
                            v-model="tempOrder.user.address">
                        </label>

                        <label for="user-email" class="form-label w-100">電子信箱
                            <input type="text" class="form-control" id="user-email"
                            v-model="tempOrder.user.email">
                        </label>
                    </div>
                    <div class="col-lg-8">
                        <h5 class="text-danger">訂單資訊</h5>
                        <div class="row">
                          <div class="col-lg-6">
                            <label for="order-time" class="form-label w-100">訂單建立時間
                                <input type="date" class="form-control" id="order-time"
                                v-model="tempOrder.create_at" disabled>
                            </label>
                          </div>
                          <div class="col-lg-6">
                            <p>付款狀態</p>
                            <div class="d-flex">
                              <div class="form-check form-switch">
                                <label class="form-check-label" for="order_paid">
                                  <input class="form-check-input" type="checkbox"
                                  role="switch" id="order_paid" aria-checked="check"
                                  v-model="tempOrder.is_paid">
                                </label>
                              </div>
                              <div>
                                <div>
                                  <span class="text-success" v-if="tempOrder.is_paid">已付款</span>
                                  <span class="text-danger" v-else>尚未付款</span>
                                </div>
                                <span class="text-success" v-if="tempOrder.paid_date">
                                  付款日 {{ $filters.date(tempOrder.paid_date * 1000) }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <p class="mb-0">訂單內容</p>
                            <div class="overflow-auto border border-3 border-danger rounded mb-3">
                              <table class="table text-nowrap">
                                <thead>
                                  <tr>
                                    <th>商品名稱</th>
                                    <th width="120px">數量</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(item) in tempOrder.products" :key="item.id">
                                    <td>{{ item.product.title }}</td>
                                    <td>
                                      <div class="input-group input-group-sm" style="width: 120px;">
                                          <input type="number" class="form-control"
                                          aria-label="buy number" v-model.number="item.qty"
                                          min="1" disabled>
                                          <div class="input-group-text">
                                            / {{ item.product.unit }}</div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <p class="mb-0">買家留言</p>
                            <div class="border bg-white rounded p-2 mb-3">
                              <p>{{ tempOrder.message }}</p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <h5 class="text-center">
                              總金額 {{ $filters.currency(tempOrder.total) }} NTD
                            </h5>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-lg btn-outline-secondary d-block"
                        data-bs-dismiss="modal">取消
                </button>
                <button type="button" class="btn btn-lg btn-danger w-50"
                @click="emitOrder">確認</button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      modal: {},
      tempOrder: {
        products: {},
        user: {},
      },
      isLoading: false,
      is_paid: '',
    };
  },
  watch: {
    order() {
      this.tempOrder = JSON.parse(JSON.stringify(this.order));
      this.tempOrder.create_at = this.$filters.inputDateType(this.tempOrder.create_at);
    },
  },
  methods: {
    emitOrder() {
      const emitOrder = JSON.parse(JSON.stringify(this.tempOrder));
      const unixTime = new Date(emitOrder.create_at).getTime();
      emitOrder.create_at = unixTime / 1000;
      this.$emit('update-order', emitOrder);
    },
  },
  mixins: [modalMixin],
  inject: ['$httpMessageState'],
};
</script>
