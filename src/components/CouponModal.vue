<template>
    <div class="modal fade" ref="modal">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content border-0" style="width: 300px;">
                <div class="modal-header bg-success text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                    <span>新增優惠券</span>
                </h5>
                <button type="button" class="btn-close"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="title" class="form-label w-100">優惠券名稱
                        <input type="text" class="form-control" id="title"
                        placeholder="請輸入名稱"
                        v-model="tempCoupon.title"
                        ></label>
                    </div>
                    <div class="mb-3">
                        <label for="percent" class="form-label w-100">折扣百分比
                        <input type="number" class="form-control" id="percent"
                        placeholder="請輸入折扣百分比"
                        v-model="tempCoupon.percent"
                        min="1"
                        ></label>
                    </div>
                    <div class="mb-3">
                        <label for="due_date" class="form-label w-100">到期日
                        <input type="date" class="form-control" id="due_date"
                        placeholder="請輸入到期日"
                        v-model="tempCoupon.due_date"
                        ></label>
                    </div>
                    <div class="mb-3">
                        <label for="code" class="form-label w-100">優惠碼
                        <input type="text" class="form-control" id="code"
                        placeholder="請輸入優惠碼"
                        v-model="tempCoupon.code"
                        ></label>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                        <label class="form-check-label" for="is_enabled">
                            <input class="form-check-input" type="checkbox"
                                :true-value="1"
                                :false-value="0"
                                id="is_enabled"
                                v-model="tempCoupon.is_enabled">
                            是否啟用
                        </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">取消
                </button>
                <button type="button" class="btn btn-primary"
                @click="emitCoupon">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
      tempCoupon: {},
    };
  },
  props: {
    coupon: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
  },
  mixins: [modalMixin],
  methods: {
    emitCoupon() {
      const unixTime = new Date(this.tempCoupon.due_date).getTime();
      this.tempCoupon.due_date = unixTime;
      this.$emit('update-coupon', this.tempCoupon);
    },
  },
};
</script>
