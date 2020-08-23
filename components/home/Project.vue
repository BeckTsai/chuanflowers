<template>
  <div class="project-wrap">
    <div class="title">PROJECT</div>
    <div class="subtitle">Selected Works</div>
    <div class="items-wrap">
      <div class="item-wrap">
        <div class="img-wrap" @click="$router.push('/project/floral_bouquet')">
          <img src="@/assets/image/home/floral-bouquet.png" alt="Floral bouquet" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花束</span>Floral bouquet</div>
        <div class="list">01</div>
      </div>
      <div class="item-wrap">
        <div class="img-wrap" @click="$router.push('/project/wreath')">
          <img src="@/assets/image/home/wreath.png" alt="Wreath" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花圈</span>Wreath</div>
        <div class="list">02</div>
      </div>
      <div class="item-wrap">
        <div class="img-wrap" @click="$router.push('/project/floral_box')">
          <img src="@/assets/image/home/floral-box.png" alt="Floral box" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花禮/花盒/盆花</span>Floral box</div>
        <div class="list">03</div>
      </div>
      <div class="item-wrap">
        <div class="img-wrap" @click="$router.push('/project/bridal_bouquet')">
          <img src="@/assets/image/home/bridal-bouquet.png" alt="Bridal bouquet" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">捧花/胸花</span>Bridal bouquet</div>
        <div class="list">04</div>
      </div>
      <div class="item-wrap">
        <div class="img-wrap" @click="$router.push('/project/wedding_decor')">
          <img src="@/assets/image/home/wedding-decor.png" alt="Wedding decor" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">婚禮佈置</span>Wedding decor</div>
        <div class="list">05</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project-wrap {
  height: 156vw;
  background-color: $white;
}

.title {
  margin-top: 8rem;
  color: $pink;
  font-size: 35px;
  letter-spacing: 7px;
  text-align: center;
}

.subtitle {
  margin-bottom: 153px;
  font-size: 18px;
  text-align: center;
  color: $grey3;
}

.items-wrap {
  position: relative;
  .item-wrap {
    position: absolute;
  }

  .list {
    position: absolute;
    top: -36px;
    left: 14px;
    color: $grey1;
    font-size: 50.45px;
  }

  .img-wrap {
    cursor: pointer;

    img {
      width: 100%;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 27px);
      transition: 0.5s;
    }

    &:hover {
      .mask {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  .item-text {
    font-size: 18px;
    text-align: right;

    .serif-text {
      font-size: 16px;
    }
  }

  .item-wrap:nth-child(1) {
    left: 17vw;
    width: 23.5vw;
  }

  .item-wrap:nth-child(2) {
    right: 10vw;
    top: 23.5vw;
    width: 39.5vw;
  }

  .item-wrap:nth-child(3) {
    top: 53vw;
    left: 10.5vw;
    width: 34vw;
  }

  .item-wrap:nth-child(4) {
    right: 15.5vw;
    top: 70.5vw;
    width: 26.5vw;
  }

  .item-wrap:nth-child(5) {
    left: 19.5vw;
    top: 107vw;
    width: 48vw;
  }
}
</style>
