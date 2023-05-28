<template>
  <div class="toast-container position-fixed">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/ToastBox.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    pushMessage(toastMsg) {
      const { style, title, content } = toastMsg;
      this.messages.push({ style, title, content });
    },
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-msg', this.pushMessage);
  },
};
</script>
