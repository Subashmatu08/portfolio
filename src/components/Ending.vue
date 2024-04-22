<template>
  <div class="enclose">
    <div id="blob"></div>
    <div id="blur"></div>
    <div ref="titleRef" data-value="LetsConnect! " class="EndingTitle">
      ************
    </div>
    <div class="social">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/subashmatu/" target="_blank"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/Subashmatu08" target="_blank"
            ><i class="fa-brands fa-square-github"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/subashmatu/" target="_blank"
            ><i class="fa-brands fa-square-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const letters = 'abcsdefghijklmnopqrstuvwxyz';
let interval = ref(null);
const titleRef = ref(null);

onMounted(() => {
  const blob = document.getElementById('blob');

  blob.style.position = 'absolute';
  blob.style.transition = 'left 3s ease-out, top 3s ease-out';
  blob.style.backdropFilter = 'blur(12vmax)';

  window.onpointermove = (event) => {
    const clientX = event.clientX - 'px';
    const clientY = event.clientY - 'px';

    blob.style.transform = `translate(${clientX}, ${clientY})`;
  };
  titleRef.value.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval.value);

    interval.value = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval.value);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
</script>

<style scoped>
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.5;
  }

  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: white;
  height: 500px;
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, #353b17, rgb(206, 206, 206));
  animation: rotate 20s infinite;
  opacity: 0.5;
  -webkit-backdrop-filter: blur(12vmax);
  backdrop-filter: blur(12vmax);
  will-change: transform, backdrop-filter;
  transition: transform 0.2s ease-out;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax) !important;
  -webkit-backdrop-filter: blur(12vmax);
}

.EndingTitle {
  font-weight: 900;
  position: absolute;
  color: rgb(183, 183, 183);
  letter-spacing: 0.1em;
  font-size: clamp(3rem, 10rem, 12rem);
  color: white;
  white-space: nowrap;
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  margin: 0rem;
  position: absolute;
  z-index: 3;
}
.enclose {
  position: relative;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social ul {
  z-index: 3;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.social li {
  padding: 1em;
}
.social a {
  color: white;
  font-size: 2.5rem;
}
.social a:hover {
  color: rgb(183, 183, 183);
}
</style>
