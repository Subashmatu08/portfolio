<template>
  <div class="card-group">
    <div class="little-card card" title="hello"></div>
    <div class="big-card card"></div>
    <div class="little-card card"></div>
    <div class="big-card card"></div>
    <div class="little-card card"></div>
    <div class="big-card card"></div>
    <div class="little-card card"></div>
    <div class="big-card card"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.card-group,
.card {
  aspect-ratio: 5 / 7;
}
.card-group,
.big-card {
  width: 40vmin;
}
.card-group {
  position: absolute;
  margin-top: 5rem;
  transition: transform 400ms ease;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  position: absolute;
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  background-position: center;
  background-size: cover;
}
.big-card {
  border-radius: 1vmin;
}

.little-card {
  width: 12vmin;
  border-radius: 2vmin;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -1vmin 1vmin 2vmin rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.big-card:nth-child(2) {
  background-image: url('/public/covidinfo.webp');
  transform: translateX(-10%) rotate(-1deg);
}

.big-card:nth-child(4) {
  background-image: url('/public/lms.webp');
  transform: rotate(2deg);
}

.big-card:nth-child(6) {
  background-image: url('/public/careerpath.webp');
  transform: translateX(-6%) rotate(-3deg);
}

.big-card:nth-child(8) {
  background-image: url('verser.webp');
  transform: translate(10%, 3%) rotate(5deg);
}

.card-group[data-index='1'] > .big-card:nth-child(6) {
  background-image: url('https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
}

.card-group[data-index='1'] > .big-card:nth-child(8) {
  background-image: url('https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
}

.card-group[data-index='2'] > .big-card:nth-child(4) {
  background-image: url('https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
}

.card-group[data-index='2'] > .big-card:nth-child(8) {
  background-image: url('https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
}

.little-card:nth-child(1) {
  background-image: url('public/gsbb.webp');
}

.little-card:nth-child(3) {
  background-image: url('public/stageVR.webp');
}

.little-card:nth-child(5) {
  background-image: url('public/tldr.webp');
}

.little-card:nth-child(7) {
  background-image: url('public/vision.webp');
}

.card-group:hover > .card {
  box-shadow: -2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.card-group:hover > .big-card:nth-child(2) {
  transform: translate(-75%, 16%) rotate(-24deg);
}

.card-group:hover > .big-card:nth-child(4) {
  transform: translate(-25%, 8%) rotate(-8deg);
}

.card-group:hover > .big-card:nth-child(6) {
  transform: translate(25%, 8%) rotate(8deg);
}

.card-group:hover > .big-card:nth-child(8) {
  transform: translate(75%, 16%) rotate(24deg);
}

.card-group:hover > .little-card:nth-child(1) {
  transform: translate(200%, -160%) rotate(-15deg);
}

.card-group:hover > .little-card:nth-child(3) {
  transform: translate(160%, 170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(5) {
  transform: translate(-200%, -170%) rotate(15deg);
}

.card-group:hover > .little-card:nth-child(7) {
  transform: translate(-280%, 140%) rotate(-15deg);
}
</style>
