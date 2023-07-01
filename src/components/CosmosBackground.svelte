<script>
  export let animated = true;
</script>

<div class:cosmos={animated}>
  <!-- Stars -->
  <div class="stars">
    <div class="star" />
    <div class="star" />
    <div class="star" />
  </div>
</div>

<style>
  .cosmos {
    @apply w-screen h-screen fixed top-0 left-0 z-[-1];
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0.8) 70%,
      rgba(0, 0, 0, 1) 100%
    );
    overflow: hidden;
  }

  .stars {
    @apply absolute top-0 left-0 w-full h-full;
    pointer-events: none;
  }

  .star {
    @apply absolute w-1 h-1 bg-white rounded-full;
    animation: starAnimation linear infinite;
  }

  @keyframes starAnimation {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-10px, -10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>
