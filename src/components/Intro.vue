<template>
  <div
    class="full"
    @mousemove="handleOnMove"
    @touchmove.prevent="handleOnTouchMove"
    id="background"
  >
    <div class="card" ref="card">
      <p class="card-letters">{{ lettersContent }}</p>
    </div>
    <div class="introTitle">
      <span>Subash Matu</span>
      <span>[Data Scientist, Web Developer, Researcher]</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lettersContent: this.fillContent(0),
      cursorPosition: { x: 0, y: 0 },
    };
  },
  methods: {
    randomChar() {
      const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      return chars[Math.floor(Math.random() * chars.length)];
    },
    fillContent(length) {
      return this.randomString(length);
    },
    randomString(length) {
      return Array.from({ length }, this.randomChar).join('');
    },
    handleOnMove(event) {
      const rect = this.$refs.card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.cursorPosition.x = x;
      this.cursorPosition.y = y;
      this.updateOverlay();
      this.lettersContent = this.fillContent(7000);
    },
    handleOnTouchMove(event) {
      event.preventDefault();
      this.handleOnMove(event.touches[0]);
    },
    updateOverlay() {
      const styleElement = this.$refs.card.style;
      styleElement.setProperty('--cursor-x', `${this.cursorPosition.x}px`);
      styleElement.setProperty('--cursor-y', `${this.cursorPosition.y}px`);
    },
  },
  mounted() {
    this.lettersContent = this.fillContent(0);
  },
};
</script>

<style scoped>
.full {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.card {
  position: relative;
  width: 95%;
  height: 90%;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  border-radius: 2rem;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at var(--cursor-x) var(--cursor-y),
    rgba(255, 255, 255, 0.161),
    rgba(255, 255, 255, 0.161) 200px,
    rgba(255, 255, 255, 0.05) 300px,
    #000000 500px /* #1c1b22 500px */
  );
  pointer-events: none;
}
.card-letters {
  padding: 0;
  margin: 0;
  color: white;
  font-size: 0.8rem;
  height: 100%;
  width: 100%;
}
.introTitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.introTitle span:nth-child(2) {
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #1c1b22cc;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.introTitle span:nth-child(1) {
  font-size: 10rem;
  color: rgba(255, 248, 248, 0.965);
  font-weight: 900;
}
#background {
  background-image: url('public/bg2.svg');
  background-repeat: repeat;
  animation: moveBackground 20s ease-in-out infinite;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
