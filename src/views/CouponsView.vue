<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>

  <div class="row g-3 mt-3 justify-content-end">
    <div class="col-sm-3">
      <button type="button" class="btn btn-success w-100"
      @click="openModal(true)">新增優惠券</button>
    </div>
  </div>
  <div class="overflow-auto">

    <table class="table mt-4 text-nowrap">
      <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比(%)</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{ `${item.percent}%` }}</td>
            <td>{{ $filters.inputDateType(item.due_date / 1000) }}</td>
            <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
                <div class="btn-group w-100">
                <button class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)">刪除</button>
                </div>
            </td>
          </tr>
      </tbody>
    </table>

  </div>

  <PaginationModel :pages="pagination"
    @emit-pages="getCoupons"></PaginationModel>
  <CouponModal ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"></CouponModal>
  <DelModal ref="delModal"
    :item="delItem"
    @del-item="deleteCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationModel from '@/components/PaginationModel.vue';

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      delItem: {},
      isLoading: false,
    };
  },
  components: {
    CouponModal,
    DelModal,
    PaginationModel,
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    getCoupons(page = 1) {
      let toPage = '';
      if (page === 'previous' && this.pagination.has_pre) {
        toPage = this.pagination.current_page - 1;
      } else if (page === 'next' && this.pagination.has_next) {
        toPage = this.pagination.current_page + 1;
      } else {
        toPage = page;
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${toPage}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.coupons = res.data.coupons;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          is_enabled: 0,
          due_date: new Date().getTime(),
        };
      } else {
        this.tempCoupon = JSON.parse(JSON.stringify(item));
      }
      this.isNew = isNew;
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    openDelModal(item) {
      this.delItem = item;
      const couponComponent = this.$refs.delModal;
      couponComponent.showModal();
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = 'put';
      }
      const couponComponent = this.$refs.couponModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempCoupon })
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            couponComponent.hideModal();
            this.$httpMessageState('success', '更新成功', res.data.message);
            this.getCoupons();
          } else {
            this.$httpMessageState('warning', '更新失敗', '請再檢查一次。');
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    deleteCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.delItem.id}`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            const couponComponent = this.$refs.delModal;
            couponComponent.hideModal();
            this.getCoupons();
            this.$httpMessageState('success', '成功刪除優惠券', res.data.message);
          } else {
            this.$httpMessageState('warning', '刪除優惠券失敗', res.data.message);
          }
        })
        .catch(() => {
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
