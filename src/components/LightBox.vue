<template>
    <div>
      <a href="#" class="lightbox-link" @click.prevent="showMultiple(product)">light-box-link</a>

      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>
  </template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: ['product'],
  components: {
    VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([]);
    // Img Url , string or Array of string
    // ImgObj { src: '', title: '', alt: '' }
    // 'src' is required
    // allow mixing

    const onShow = () => {
      visibleRef.value = true;
    };
    const showSingle = () => {
      imgsRef.value = 'http://via.placeholder.com/350x150';
      // or
      // imgsRef.value  = {
      //   title: 'this is a placeholder',
      //   src: 'http://via.placeholder.com/350x150'
      // }
      onShow();
    };
    const showMultiple = (item) => {
      imgsRef.value = [item.imageUrl];
      imgsRef.value = imgsRef.value.concat(item.imagesUrl);
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      indexRef.value = 0; // index of imgList
      onShow();
    };
    const onHide = () => { visibleRef.value = false; };
    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
    };
  },
});
</script>
