<template>
  <div class="center">
    <div class="heading">PROJECTS</div>
    <router-link to="/proj" class="card">
      <HoverCard />
    </router-link>
  </div>
</template>

<script setup>
import HoverCard from './HoverCard.vue';
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.center {
  margin: 0px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
}
.heading {
  margin-bottom: 2em;
}
</style>
