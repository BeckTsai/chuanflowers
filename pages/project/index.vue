<template>
  <div>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(img, index) in resultImg" :key="index" class="swiper-slide">
          <img :src="img" class="img-wrap" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-text serif-text">沒有一絲矯情，只有真實的情感。</div> -->
    </div>
    <div class="scroll-wrap">
      <div class="scroll-indocator" />
      <div class="scroll-text">Scroll Down</div>
    </div>
    <div class="project-wrap">
      <div class="left">
        <div class="title"><span class="serif-text">花藝作品</span></div>
        <div class="subtitle serif-text">工作室採預約制服務，請先訊息/電話預約</div>
        <div class="works-title">SELECTED WORKS</div>
        <WorksList class="list" />
      </div>
      <div class="right">
        <div class="title">CATEGORY</div>
        <div class="item"><span class="serif-text">花藝作品</span>Flowers</div>
        <!-- <div class="item" @click="$router.push('/courses')"><span class="serif-text">課程紀錄</span>Courses</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import WorksList from '../../components/Courses/WorksList'

export default {
  components: {
    WorksList,
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 4000,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        fadeEffect: {
          crossFade: true,
        },
      },
      windowWidth: null,
    }
  },
  computed: {
    resultImg() {
      if (this.windowWidth && this.windowWidth < 780) {
        return [
          require('~/assets/image/project/banner_m_1.png'),
          require('~/assets/image/project/banner_m_2.png'),
          require('~/assets/image/project/banner_m_3.png'),
        ]
      }
      return [
        require('~/assets/image/project/banner_1.png'),
        require('~/assets/image/project/banner_2.png'),
        require('~/assets/image/project/banner_3.png'),
      ]
    },
  },
  mounted() {
    console.log(window.outerWidth)
    this.$nextTick(() => {
      this.windowWidth = window.outerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
@keyframes ScrollnavigateAnimation {
  0% {
    height: 0;
  }

  45% {
    height: 100%;
  }

  55% {
    height: 100%;
    top: 0;
  }

  100% {
    height: 0;
    top: 100%;
  }
}

.img-wrap {
  width: 100%;
}
// .swiper-text {
//   position: absolute;
//   top: 26%;
//   left: 50%;
//   font-size: 30px;
//   color: $white;
//   writing-mode: vertical-lr;
//   z-index: 1;
// }

.project-wrap {
  display: flex;
  justify-content: space-between;
  padding: 297px 171px 107px 96px;
}

.scroll-wrap {
  position: absolute;
  width: 100%;
  height: 90px;
  bottom: 40px;
  text-align: center;

  .scroll-text {
    position: absolute;
    left: calc(50% - 43px);
    bottom: -24px;
    color: #000;
    z-index: 1;
    font-size: 15px;
  }
}

.scroll-indocator {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1px;
  height: 90px;
  color: #fff;
  z-index: 1;
  background-color: #797878;

  &::before,
  &::after {
    width: 1px;
    height: 90px;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: auto;
    content: '';
  }

  &::after {
    background-color: #c3c3c3;
    animation: ScrollnavigateAnimation 2s infinite cubic-bezier(0.77, 0, 0.18, 1);
  }
}

.left {
  .title {
    font-size: 22px;
    letter-spacing: 2.2px;
    color: $pink;
  }

  .subtitle {
    font-size: 13px;
    letter-spacing: 1.3px;
  }

  .works-title {
    margin: 89px 0 39px;
    font-size: 15px;
  }

  .list {
    width: 1042px;
  }
}

.right {
  margin-top: 139px;

  .title {
    margin-bottom: 38px;
    font-size: 12px;
    letter-spacing: 1.2px;
  }

  .item {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;

    .serif-text {
      margin-right: 11px;
      letter-spacing: 2px;
    }

    &:last-child {
      margin-top: 10px;
    }

    &:hover {
      color: $pink;
    }
  }
}

@media screen and (max-width: $noteBook) {
  .img-wrap {
    width: initial;
    height: 730px;
  }

  .project-wrap {
    padding-top: 130px;
    padding-right: 77px;
  }

  .scroll-wrap {
    bottom: 35px;
  }

  .left {
    .list {
      width: initial;
    }
  }

  .right {
    margin-right: 20px;
    width: 215px;

    .item {
      font-size: 15px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .project-wrap {
    display: block;
    padding: 93px 0 0 17px;
  }

  .list {
    margin-left: -19px;
  }

  .left {
    .title {
      font-size: 18px;
    }

    .subtitle {
      font-size: 12px;
    }

    .works-title {
      font-size: 12px;
    }
  }

  .right {
    width: initial;
    margin-top: 0;
    margin-bottom: 60px;

    .item {
      font-size: 15px;

      &:last-child {
        margin-top: 15px;
      }
    }
  }
}
</style>
