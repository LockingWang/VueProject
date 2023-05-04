<template>
    <swiper
      :modules="modules"
      :slides-per-view="itemsNum"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
        <swiper-slide v-for="item in items" :key="item.id">
            <div class="card h-100 border border-5">
                <img :src="item.imageUrl" class="card-img-top object-fit-contain"
                  style="max-height: 300px;" alt="...">
                <div class="card-body border-top d-flex flex-column">
                    <h5 class="card-title text-center d-block">{{ item.title }}</h5>
                    <a href="#" class="btn btn-outline-danger stretched-link d-block mt-auto"
                    @click.prevent="emitChangeSign(item)">看更多</a>
                </div>
            </div>
        </swiper-slide>
    </swiper>
  </template>
<script>
// import Swiper core and required modules
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import Swiper styles
export default {
  props: ['items'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      itemsNum: 3,
    };
  },
  methods: {
    checkViewWidth() {
      if (window.innerWidth >= 768) {
        this.itemsNum = 3;
      } else {
        this.itemsNum = 1;
      }
    },
    emitChangeSign(item) {
      this.$emit('changeProduct', item);
    },
  },
  created() {
    this.checkViewWidth();
  },
  setup() {
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
