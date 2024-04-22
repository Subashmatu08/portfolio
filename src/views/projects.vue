<template>
  <div class="name">
    PROJECTS <span class="subscript">Links to projects coming soon..</span>
  </div>
  <div id="gallery" ref="gallery">
    <div v-for="(item, index) in imageSources" :key="index" class="tile">
      <img :src="item" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const imageSources = ref([
      'public/covidinfo.webp',
      'public/careerpath.webp',
      'public/gsbb.webp',
      'public/lms.webp',
      'public/stageVR.webp',
      'public/verser.webp',
      'public/tldr.webp',
      'public/vision.webp',
      'public/thyroidML.webp',
    ]);
    const gallery = ref(null);

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const xDecimal = mouseX / window.innerWidth;
      const yDecimal = mouseY / window.innerHeight;
      const maxX = gallery.value.offsetWidth - window.innerWidth;
      const maxY = gallery.value.offsetHeight - window.innerHeight;
      const panX = maxX * xDecimal * -1;
      const panY = maxY * yDecimal * -1;

      gallery.value.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    };

    onMounted(() => {
      window.scrollTo(0, 0);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    });

    onUnmounted(() => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    });

    return {
      imageSources,
      gallery,
    };
  },
};
</script>

<style scoped>
body,
html {
  overflow: hidden !important;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background-color: rgb(10, 10, 10); */
  height: 100vh;
  margin: 0px;
}
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10em !important;
  letter-spacing: 0.15em;
  font-weight: 900;
  line-height: 1.1;
  color: rgb(183, 183, 183);
}

#gallery {
  height: 140vmax;
  width: 140vmax;
  position: absolute;
}
.subscript {
  font-size: 0.1em;
  letter-spacing: normal;
}

.tile {
  border-radius: 1vmax;
  position: absolute;
  transition: transform 800ms ease;
  cursor: pointer;
}

.tile:hover {
  transform: scale(1.1);
}

.tile:hover > img {
  opacity: 1;
  transform: scale(1.01);
}

.tile > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 800ms ease, transform 800ms ease;
}

.tile:nth-child(1) {
  background-color: rgb(255, 238, 88);
  height: 14%;
  width: 20%;
  left: 5%;
  top: 5%;
}

.tile:nth-child(2) {
  background-color: rgb(66, 165, 245);
  height: 24%;
  width: 14%;
  left: 42%;
  top: 12%;
}

.tile:nth-child(3) {
  background-color: rgb(239, 83, 80);
  height: 18%;
  width: 16%;
  left: 12%;
  top: 34%;
}

.tile:nth-child(4) {
  background-color: rgb(102, 187, 106);
  height: 14%;
  width: 12%;
  left: 45%;
  top: 48%;
}

.tile:nth-child(5) {
  background-color: rgb(171, 71, 188);
  height: 16%;
  width: 32%;
  left: 8%;
  top: 70%;
}

.tile:nth-child(6) {
  background-color: rgb(255, 167, 38);
  height: 24%;
  width: 24%;
  left: 68%;
  top: 8%;
}

.tile:nth-child(7) {
  background-color: rgb(63, 81, 181);
  height: 16%;
  width: 20%;
  left: 50%;
  top: 74%;
}

.tile:nth-child(8) {
  background-color: rgb(141, 110, 99);
  height: 24%;
  width: 18%;
  left: 72%;
  top: 42%;
}

.tile:nth-child(9) {
  background-color: rgb(250, 250, 250);
  height: 10%;
  width: 8%;
  left: 84%;
  top: 84%;
}
</style>
