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
    <div id="slider" v-swiper="swiperOption" class="slider">
      <div class="swiper-wrapper">
        <div
          v-for="(item, idx) in imgList"
          :key="idx"
          class="swiper-slide"
          @click="$router.push(`/project/${item.name}`)"
        >
          <div class="item">
            <div class="num">{{ `0${idx + 1}` }}</div>
            <img v-lazy="require(`~/assets/image/home/m_${idx + 1}.png`)" class="img-wrap" />
            <div class="item-text">
              <span class="serif-text">{{ item.zhText }} </span>{{ item.enText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      width: 330,
      speed: 1000,
    },
    imgList: [
      {
        name: 'floral_bouquet',
        zhText: '花束',
        enText: 'Floral bouquet',
      },
      { name: 'wreath', zhText: '花圈', enText: 'Wreath' },
      {
        name: 'floral_box',
        zhText: '花禮/花盒/盆花',
        enText: 'Floral box',
      },
      {
        name: 'bridal_bouquet',
        zhText: '捧花/胸花',
        enText: 'Bridal bouquet',
      },
      {
        name: 'wedding_decor',
        zhText: '婚禮佈置',
        enText: 'Wedding decor',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.project-wrap {
  height: 156vw;
  background-color: $white;
}

.title {
  margin-top: 6rem;
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
    font-size: 50px;
  }

  .img-wrap {
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      transition: 0.7s;
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
      img {
        transform: scale(1.1);
      }

      .mask {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  .item-text {
    font-size: 18px;
    text-align: right;

    .serif-text {
      margin-right: 5px;
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
    top: 66.5vw;
    width: 26.5vw;
  }

  .item-wrap:nth-child(5) {
    left: 19.5vw;
    top: 107vw;
    width: 48vw;
  }
}

.slider {
  display: none;
}
@media screen and (max-width: $noteBook) {
  .title {
    font-size: 25px;
  }

  .subtitle {
    font-size: 15px;
  }
  .items-wrap {
    .item-text {
      margin-top: 4px;
      font-size: 15px;

      .serif-text {
        font-size: 15px;
      }
    }
    .list {
      top: -25px;
      font-size: 35px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .project-wrap {
    height: initial;
    padding-bottom: 69px;
  }
  .title {
    margin-top: 46px;
    font-size: 20px;
    letter-spacing: 4px;
  }

  .subtitle {
    margin-bottom: 70px;
    font-size: 12px;
  }

  .items-wrap {
    display: none;
  }

  .slider {
    display: block;
  }

  .item {
    position: relative;
    width: 100%;
    height: 292px;
    margin: 0 auto;
    padding-top: 20px;
    padding-left: 20px;

    img {
      width: 100%;
    }
  }

  .num {
    position: absolute;
    top: -2px;
    left: 35px;
    color: #000;
    font-size: 30px;
  }

  .item-text {
    color: $grey3;
    font-size: 14px;
  }
}
</style>
