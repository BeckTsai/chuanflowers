<template>
  <div class="d-flex position-relative">
    <div class="about-wrap position-absolute d-flex align-items-center">
      <div class="about-title">ABOUT</div>
      <div class="line"></div>
    </div>
    <div class="left">
      <img src="~/assets/image/home/about.png" />
    </div>
    <div class="right position-relative">
      <div class="title position-absolute">
        <span class="serif-text">繾綣 </span>
        Chuan
      </div>
      <div class="content serif-text">花能夠訴說所有沒能說出口的話語，傳達所有不該被時間拘束的情感</div>
      <div class="text position-absolute serif-text">工作室採預約制服務，請先訊息/電話預約</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-wrap {
  top: 81px;
  left: 207px;
  width: 60%;
}

.about-title {
  color: $white;
  font-size: 35px;
  letter-spacing: 7px;
}

.line {
  width: 100%;
  height: 1px;
  background-color: $white;
  z-index: 1;
}

.left,
.right {
  width: 50%;
}

.left {
  img {
    width: 100%;
  }
}

.right {
  background-color: $pink;
  color: $white;
}

.title {
  top: 84px;
  left: 126px;
  padding-left: 26px;
  background-color: $pink;
  font-size: 22px;
  width: 80%;
  z-index: 2;
}

.content {
  writing-mode: vertical-rl;
  color: $white;
  margin: 28% auto 0;
  height: 477px;
  letter-spacing: 13px;
}

.text {
  bottom: 34px;
  right: 79px;
  font-size: 13px;
}
</style>
