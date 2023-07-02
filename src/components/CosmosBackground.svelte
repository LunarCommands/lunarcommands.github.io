<script>
  import { onMount } from "svelte";

  export let animated = true;

  let stars = [];

  function generateStars() {
    stars = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
  }

  onMount(generateStars);
</script>

<div class="cosmos" class:cosmos={animated}>
  <div class="moon" />
  <div class="stars">
    {#each stars as { id, x, y, size, delay }}
      <div
        class="star"
        style="
          transform: translate({x}px, {y}px);
          width: {size}px;
          height: {size}px;
          animation-delay: {delay}s"
      />
    {/each}
  </div>

  <div class="content">
    <slot />
  </div>
</div>

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

  .moon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: yellow;
    filter: blur(50px);
    animation: moonAnimation 90s infinite linear;
  }

  @keyframes moonAnimation {
    0% {
      top: 20px;
      left: 20px;
    }
    20% {
      top: 20px;
      left: calc(100% - 220px);
    }
    40% {
      top: calc(100% - 220px);
      left: calc(100% - 220px);
    }
    60% {
      top: calc(100% - 220px);
      left: 20px;
    }
    80% {
      top: calc(50% - 110px);
      left: calc(50% - 110px);
      transform: rotateZ(45deg);
    }
    100% {
      top: 20px;
      left: 20px;
      transform: rotateZ(0deg);
    }
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
