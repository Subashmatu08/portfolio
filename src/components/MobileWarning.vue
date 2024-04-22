<template>
  <div class="mobile-warning">
    <p>
      Please visit this site on a desktop or laptop.
      <br />
      The mobile version is coming sooooooooooooon.....
    </p>
    <button @click="close">Close</button>
  </div>
</template>

<script></script>

<style scoped>
.mobile-warning {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000;
}
</style>
