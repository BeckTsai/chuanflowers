<template>
  <div>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(img, index) in imgList" :key="index" :style="heightStyle" class="swiper-slide banner-slider">
          <picture>
            <source class="img-wrap" :srcset="img.mobile" media="(max-width: 760px)" />
            <img class="img-wrap" :src="img.pc" alt="" />
          </picture>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-text serif-text">我們擁有彼此的盛開。</div>
      <div class="scroll-wrap">
        <div class="scroll-indocator" />
      </div>
    </div>
    <div ref="projectIndex" class="project-wrap" :class="{ 'slide-up': active }">
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
import device from '../../mixins/device'
import mobilePic1 from '~/assets/image/project/banner_m_1.png'
import mobilePic2 from '~/assets/image/project/banner_m_2.png'
import mobilePic3 from '~/assets/image/project/banner_m_3.png'
import Pic1 from '~/assets/image/project/banner_1.png'
import Pic2 from '~/assets/image/project/banner_2.png'
import Pic3 from '~/assets/image/project/banner_3.png'
import setScroll from '@/mixins/setScroll'

export default {
  components: {
    WorksList,
  },
  mixins: [device, setScroll],
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 5000,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        fadeEffect: {
          crossFade: true,
        },
      },
      active: false,
      windowWidth: null,
      imgList: [
        { pc: Pic1, mobile: mobilePic1 },
        { pc: Pic2, mobile: mobilePic2 },
        { pc: Pic3, mobile: mobilePic3 },
      ],
    }
  },
  watch: {
    scrollPosition() {
      const imageLimit = this.getImageLimit('projectIndex')
      if (!this.active) {
        this.active = imageLimit < this.scrollPosition
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.outerWidth
      window.addEventListener('resize', (e) => {
        this.windowWidth = e.target.outerWidth
      })
    })
  },
  methods: {
    getImageLimit(el) {
      return this.$refs[el].offsetTop + this.$refs[el].offsetHeight / 4
    },
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

.set-scroll {
  transition: 1s linear;
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}

.scroll-position {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.img-wrap {
  height: 100vh;
  transform: scale(1);
  transition: transform 10s linear;
}

#slider {
  /deep/ {
    .swiper-slide-prev,
    .swiper-slide-active {
      img {
        transform: scale(1.1);
      }
    }
  }
}
.swiper-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: 9px;
  color: $white;
  writing-mode: vertical-lr;
  z-index: 1;
  cursor: default;
}

.project-wrap {
  display: flex;
  justify-content: space-between;
  padding: 130px 171px 107px 96px;
}

.scroll-wrap {
  position: absolute;
  width: 100%;
  height: 90px;
  bottom: 0;
  text-align: center;
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
  @extend .set-scroll;

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
  @extend .set-scroll;
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

.slide-up {
  .left,
  .right {
    @extend .scroll-position;
  }
}

@media screen and (min-width: $largeScreen) {
  .img-wrap {
    width: 100vw;
  }
}

@media screen and (max-width: $noteBook) {
  .project-wrap {
    padding-top: 130px;
    padding-right: 77px;
  }

  .swiper-text {
    font-size: 25px;
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

  .swiper-text {
    height: 290px;
    font-size: 20px;
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
