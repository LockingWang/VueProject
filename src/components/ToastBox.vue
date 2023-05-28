<template>
    <div class="toast" role="alert" aria-live="show-consequence" aria-atomic="true" ref="toast">
      <div :class="`bg-${msg.style}`" class="toast-header">
        <strong class="me-auto text-white">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ msg.content }}
      </div>
    </div>
  </template>
<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'ToastBox',
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 2000,
    });
    toast.show();
  },
};
</script>
