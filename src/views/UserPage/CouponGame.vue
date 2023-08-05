<template>
    <div class="position-relative">
        <img src="../../../public/Coupon-Game/Coupon-Game-Backgroung.svg" alt="Japan Style Room"
        class="img-fluid">
        <div class="start-btn-group">
            <button type="button" class="btn btn-primary rounded-pill start-btn fs-3"
            @click="changeResult" :disabled="playNum === 0">
                點擊抽獎
            </button>
            <p class="text-center" v-if="playNum !== 0">還有 {{ playNum }} 次機會</p>
            <p class="text-center" v-else> 抽獎次數已用完 </p>
        </div>
        <img :src="resultUrl" alt="Result"
        class="game-result">
    </div>

    <div class="modal modal-sm fade" ref="modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-danger">
                    <h1 class="modal-title fs-5 fw-bold text-white">{{ resultModal.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class=""> {{ resultModal.content }} </p>
                    <div v-if="resultModal.couponCode !== ''">
                        <p>優惠碼 [{{ resultModal.couponCode }}]</p>
                        <button type="button" class="btn btn-outline-danger"
                        @click="copyCouponCode()">複製優惠碼</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin';

export default {

  data() {
    return {
      resultUrl: 'Coupon-Game/start-img.png',
      resultModal: {
        title: '',
        content: '',
        couponCode: '',
      },
      odds: {
        頭獎區間: '80-100',
        新人獎區間: '20-79',
        銘謝惠顧區間: '0-19',
      },
      playNum: 3,
    };
  },
  methods: {
    changeResult() {
      if (this.playNum >= 1) {
        this.playNum -= 1;
        localStorage.setItem('playNum', this.playNum);
      } else {
        return;
      }

      const gameResult = Math.round(Math.random() * 100);
      if (gameResult >= 80) {
        this.resultUrl = 'Coupon-Game/50count.png';
        this.resultModal.title = '恭喜中獎 !';
        this.resultModal.content = '天啊! 是頭獎...也太幸運了吧~';
        this.resultModal.couponCode = 'omg50dis';
      } else if (gameResult >= 20) {
        this.resultUrl = 'Coupon-Game/80count.png';
        this.resultModal.title = '恭喜中獎 !';
        this.resultModal.content = '恭喜獲得新人獎 !';
        this.resultModal.couponCode = 'newcome80';
      } else {
        this.resultUrl = 'Coupon-Game/no-count.png';
        this.resultModal.title = '銘謝惠顧 !';
        this.resultModal.content = '沒關係，我們再接再厲 !';
        this.resultModal.couponCode = '';
      }
      this.showModal();
    },
    copyCouponCode() {
      navigator.clipboard.writeText(this.resultModal.couponCode)
        .then(() => {
          this.$httpMessageState('success', '已複製優惠碼', '趕快去購物吧 !');
        });
    },
    checkPlayNum() {
      if (!localStorage.getItem('playNum')) {
        localStorage.setItem('playNum', this.playNum);
      } else {
        this.playNum = parseInt(localStorage.getItem('playNum'), 10);
      }
    },
  },
  created() {
    this.checkPlayNum();
  },
  mixins: [modalMixin],
  inject: ['$httpMessageState'],
};

</script>
