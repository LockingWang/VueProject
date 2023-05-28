<template>
    <swiper
      :modules="modules"
      :slides-per-view="itemsNum"
      :space-between="20"
      navigation
      :loop="true"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="p-3"
    >
        <swiper-slide v-for="item in items" :key="item.id">
            <div class="card h-100 border border-5" :id="item.id">
                <div class="img-box position-relative">
                  <div class="bg-img"
                  :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"></div>
                </div>
                <!-- <img :src="item.imageUrl" class="card-img-top object-fit-contain"
                  style="max-height: 300px;" alt="..."> -->
                <div class="card-body border-top d-flex flex-column">
                    <h5 class="card-title text-center text-ellipsis-multi">
                      {{ item.title }}</h5>
                    <a href="#" class="btn btn-outline-danger stretched-link d-block mt-auto"
                    :data-id="item.id"
                    @click.prevent="emitChangeSign(item)"
                    @focus="hoverEffect('in', $event)"
                    @focusout="hoverEffect('out', $event)"
                    @mouseenter="hoverEffect('in', $event)"
                    @mouseleave="hoverEffect('out', $event)">看更多</a>
                </div>
            </div>
        </swiper-slide>
    </swiper>
  </template>
<script>
import {
  Navigation, Pagination, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import ProductCard from '@/mixins/ProductCard';

export default {
  props: ['items'],
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins: [ProductCard],
  data() {
    return {
      itemsNum: 3,
    };
  },
  methods: {
    checkViewWidth() {
      if (window.innerWidth >= 768) {
        this.itemsNum = 4;
      } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
        this.itemsNum = 3;
      } else if (window.innerWidth < 576 && window.innerWidth >= 400) {
        this.itemsNum = 2;
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
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>
