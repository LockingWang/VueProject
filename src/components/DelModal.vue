<template>
  <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{ item.title }}</strong> <br>(刪除後將無法恢復)。
          <div class="mt-3" v-if="item.title === '全部訂單'">
            <label for="delPassword">
              請輸入 [ delete1314 ] ，確認刪除所有訂單。
              <input id="delPassword" type="text" v-model="delKey">
              <p class="text-danger mb-0" v-if="wrongKey">輸入錯誤，請謹慎輸入 !</p>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-danger"
                  @click="deleteTarget">確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    item: {},
  },
  data() {
    return {
      modal: {},
      delKey: '',
      wrongKey: false,
    };
  },
  methods: {
    deleteTarget() {
      if (this.item.title === '全部訂單') {
        if (this.delKey === 'delete1314') {
          this.$emit('del-all');
        } else {
          this.wrongKey = true;
        }
      } else {
        this.$emit('del-item');
      }
    },
  },
  mixins: [modalMixin],
};
</script>
