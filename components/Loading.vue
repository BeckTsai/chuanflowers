<template>
  <div class="position-fixed" :style="heightStyle">
    <div class="text serif-text">留連時有限，繾綣意難終。</div>
  </div>
</template>

<script>
import device from '../mixins/device'

export default {
  mixins: [device],
}
</script>

<style lang="scss" scoped>
@keyframes colorTransition {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.position-fixed {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;
}

.text {
  font-size: 30px;
  writing-mode: vertical-rl;
  letter-spacing: 9px;
  animation: colorTransition 0.75s 0.5;
  cursor: default;
}

@media screen and (max-width: $noteBook) {
  .text {
    height: 410px;
    font-size: 25px;
  }
}

@media screen and (max-width: $pad) {
  .text {
    height: 360px;
    font-size: 20px;
  }
}
</style>
