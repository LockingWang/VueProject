<template>
    <div class="modal fade" ref="modal">
      <LoadingOverlay :active="isLoading"></LoadingOverlay>
      <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                  <span>新增產品</span>
              </h5>
              <button type="button" class="btn-close"
                      data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="row">

                  <div class="col-sm-4">
                  <h5>商品封面</h5>
                  <div class="mb-3">
                    <img class="img-fluid"
                    alt="" :src="tempProduct.imageUrl">
                  </div>
                  <div>
                    <label class="form-label w-100" for="img-url">圖片網址 :
                      <input class="form-control" type="text" id="img-url"
                      v-model="tempProduct.imageUrl">
                    </label>
                  </div>
                  <div class="mb-3">
                      <label for="customFile" class="form-label w-100">
                      <i class="fas fa-spinner fa-spin"></i>
                      <input type="file" id="customFile"
                      class="form-control"
                      ref="mainFile"
                      @change="uploadFile()"
                      ></label>
                  </div>
                  <!-- 延伸技巧，多圖 -->
                  <div class="my-3">
                      <h5>商品參考圖</h5>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="請輸入圖片網址"
                        aria-label="imageUrl" v-model="tempImagesUrl">
                        <button class="btn btn-outline-secondary" type="button"
                        id="button-addon2" @click="uploadOthers('url')">新增參考圖</button>
                      </div>
                      <div class="input-group mb-3">
                        <input type="file" class="form-control" aria-label="imageFile"
                        ref="otherFile">
                        <button class="btn btn-outline-secondary" type="button"
                        @click="uploadOthers('file')">上傳參考圖</button>
                      </div>

                      <div class="row g-2 justify-content-center">
                        <div class="col-6 col-lg-4 position-relative"
                        v-for="(url, i) in tempProduct.imagesUrl" :key="url">
                          <img class="img-fluid" :src="url" alt="">
                          <button type="button"
                          class="btn btn-danger position-absolute p-0 img-del-btn"
                          @click="delImages(i)">
                            <i class="bi bi-x"></i>
                          </button>
                        </div>
                      </div>
                  </div>
                  </div>

                  <div class="col-sm-8">
                  <div class="my-3">
                      <label for="title" class="form-label w-100">標題 (Title)
                      <input type="text" class="form-control" id="title"
                      placeholder="請輸入標題"
                      v-model="tempProduct.title"
                      ></label>
                  </div>

                  <div class="row gx-2">
                      <div class="mb-3 col-md-6">
                      <label for="category" class="form-label w-100">分類 (Category)
                      <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                      ></label>
                      </div>
                      <div class="mb-3 col-md-6">
                      <label for="price" class="form-label w-100">單位 (Unit)
                      <input type="text" class="form-control" id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                      ></label>
                      </div>
                  </div>

                  <div class="row gx-2">
                      <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label w-100">原價 (Origin Price)
                      <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                      ></label>
                      </div>
                      <div class="mb-3 col-md-6">
                      <label for="price" class="form-label w-100">售價 (Price)
                      <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                      ></label>
                      </div>
                  </div>
                  <hr>

                  <div class="mb-3">
                      <label for="description" class="form-label w-100">產品描述
                      <textarea type="text" class="form-control" id="description"
                      placeholder="請輸入產品描述"
                      v-model="tempProduct.description"
                      ></textarea></label>
                  </div>
                  <div class="mb-3">
                      <label for="content" class="form-label w-100">說明內容
                      <textarea type="text" class="form-control" id="content"
                      placeholder="請輸入產品說明內容"
                      v-model="tempProduct.content"
                      ></textarea></label>
                  </div>
                  <div class="mb-3">
                      <div class="form-check">
                      <label class="form-check-label" for="is_enabled">
                          <input class="form-check-input" type="checkbox"
                              :true-value="1"
                              :false-value="0"
                              id="is_enabled"
                              v-model="tempProduct.is_enabled">
                          是否啟用
                      </label>
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
                @click="$emit('update-product', tempProduct)">確認</button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
      tempImagesUrl: '',
      isLoading: false,
    };
  },
  methods: {
    uploadFile() {
      const uploadFile = this.$refs.mainFile.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);

      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl;
            this.$httpMessageState('success', '主商品圖上傳成功', '新增參考圖，可以提升消費者的購買意願喔 !');
          } else {
            this.$httpMessageState('warning', '主商品圖上傳失敗', '檔案必須小於 1MB 且為圖片格式');
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
        });
    },
    uploadOthers(sign) {
      if (this.tempProduct.imagesUrl.length >= 5) {
        this.$httpMessageState('warning', '參考圖數量限制', '商品參考圖最多5張，請刪除先刪除不要的圖片。');
        return;
      }

      if (sign === 'url') {
        this.tempProduct.imagesUrl.push(this.tempImagesUrl);
      } else {
        const uploadFile = this.$refs.otherFile.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', uploadFile);
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
        this.isLoading = true;
        this.$http.post(url, formData)
          .then((res) => {
            this.isLoading = false;
            if (res.data.success) {
              this.tempProduct.imagesUrl.push(res.data.imageUrl);
              this.$httpMessageState('success', '上傳參考圖成功', '繼續新增完善商品吧 !');
            } else {
              this.$httpMessageState('warning', '上傳參考圖失敗', '檔案必須小於 1MB 且為圖片格式');
            }
          })
          .catch(() => {
            this.isLoading = false;
            this.$httpMessageState('danger', '發生錯誤', '請洽工程師。');
          });
      }
    },
    delImages(i) {
      this.tempProduct.imagesUrl.splice(i, 1);
    },
  },
  mixins: [modalMixin],
  inject: ['$httpMessageState'],
};
</script>
