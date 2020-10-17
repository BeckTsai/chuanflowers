<template>
  <div class="d-xl-flex position-relative">
    <div class="about-wrap">
      <div class="about-title">ABOUT</div>
      <div class="line"></div>
      <div class="title">
        <span class="serif-text">繾綣 </span>
        Chuan
      </div>
    </div>
    <div class="left">
      <img src="~/assets/image/home/about.png" />
    </div>
    <div class="right position-relative">
      <div class="title position-absolute">
        <span class="serif-text">繾綣 </span>
        Chuan
      </div>
      <div class="content serif-text">
        <span>花能夠訴說所有沒能說出口的話語，</span>
        <span>傳達所有不該被時間拘束的情感。</span>
      </div>
      <div class="text serif-text">工作室採預約制服務，請先訊息/電話預約</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-wrap {
  display: flex;
  position: absolute;
  align-items: center;
  top: 60px;
  left: 207px;
  width: 60%;

  .title {
    display: none;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $pink;
  color: $white;

  .title {
    top: 66px;
    left: 126px;
    padding-left: 26px;
    background-color: $pink;
    font-size: 22px;
    width: 80%;
    z-index: 2;
  }
}

.content {
  writing-mode: vertical-rl;
  color: $white;
  height: 608px;
  font-size: 25px;
  letter-spacing: 13px;

  span {
    display: inline-block;
  }

  span:first-child {
    margin-left: 14px;
  }
}

.text {
  position: absolute;
  bottom: 34px;
  right: 79px;
  font-size: 13px;
}

@media screen and (max-width: $noteBook) {
  .about-wrap {
    top: 50px;
  }

  .about-title {
    font-size: 25px;
  }

  .right {
    .title {
      font-size: 16px;
      top: 54px;
      left: 70px;
    }
  }

  .content {
    height: 416px;
    font-size: 18px;
    letter-spacing: 8px;
  }

  .text {
    right: 21px;
  }
}

@media screen and (max-width: $mobile) {
  .about-wrap {
    display: flex;
    position: absolute;
    align-items: center;
    top: 37px;
    left: 58px;
    width: initial;

    .title {
      display: block;
      color: $white;
      font-size: 14px;
    }
  }

  .about-title {
    font-size: 20px;
    letter-spacing: 4px;
  }

  .line {
    width: 66px;
    height: 1px;
    margin-left: 8px;
    margin-right: 11px;
  }

  .left,
  .right {
    width: 100%;
  }

  .right {
    padding-bottom: 146px;
    .title {
      display: none;
    }
  }

  .content {
    height: 526px;
    margin-top: 0;
    padding-top: 109px;
    font-size: 18px;
  }

  .text {
    width: 100%;
    left: 0;
    right: initial;
    text-align: center;
  }
}
</style>
