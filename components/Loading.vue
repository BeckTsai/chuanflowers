<template>
  <div class="position-fixed">
    <div class="text serif-text">留連時有限，繾綣意難終。</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.position-fixed {
  background-color: $white;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;
  padding-top: 300px;
}

.text {
  margin: 0 auto;
  font-size: 30px;
  writing-mode: vertical-rl;
  letter-spacing: 9px;
}
</style>
