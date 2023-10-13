<template>
  <div class="cosmos" :class="{ cosmos: animated }"></div>
  <div class="stars">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        transform: `translate(${star.x}px, ${star.y}px)`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`
      }"
    />
  </div>
  <div class="content">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    animated: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      stars: [],
    };
  },
  mounted() {
    this.generateStars();
  },
  methods: {
    generateStars() {
      this.stars = Array.from({ length: 50 }).map((_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
      }));
    }
  }
};
</script>
<style>
  .cosmos {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0.8) 70%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    filter: blur(2px);
    animation: flickerAnimation 2s infinite;
  }

  @keyframes flickerAnimation {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .content {
    position: relative;
    z-index: 10;
  }
</style>