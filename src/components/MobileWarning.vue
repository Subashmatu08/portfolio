<template>
  <div class="mobile-warning">
    <p>
      Please visit this site on a desktop or laptop.
      <br />
      The mobile version is coming sooooooooooooon.....
    </p>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const preventScroll = (event) => {
      event.preventDefault();
    };

    onMounted(() => {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    });

    onUnmounted(() => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    });

    return {};
  },
};
</script>

<style scoped>
.mobile-warning {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 1.2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgb(121, 134, 113);
  color: white;
  z-index: 1000;
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
