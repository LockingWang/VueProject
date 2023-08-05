<template>
    <button type="button" class="go-top-btn d-none" @click="scrollTop">
    </button>
</template>

<script>

export default {
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    scrollEvent() {
      const viewHeight = window.innerHeight;
      const scrollTopBtn = document.querySelector('.go-top-btn');
      if (window.scrollY > viewHeight) {
        scrollTopBtn.classList.remove('d-none');
      } else {
        scrollTopBtn.classList.add('d-none');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  },
};

</script>
