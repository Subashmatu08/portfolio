<script>
import MobileWarning from './components/MobileWarning.vue';

export default {
  name: 'App',
  components: {
    MobileWarning,
  },
  data() {
    return {
      showMobileWarning: false,
    };
  },
  created() {
    this.checkDevice();
  },
  methods: {
    checkDevice() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      this.showMobileWarning = isMobile;
    },
  },
};
</script>

<template>
  <router-view />
  <MobileWarning v-if="showMobileWarning" @close="showMobileWarning = false" />
</template>

<style scoped></style>
