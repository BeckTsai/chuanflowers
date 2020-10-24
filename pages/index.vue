<template>
  <div>
    <transition name="fade">
      <Loading v-show="loadingShow" />
    </transition>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(img, index) in resultImg" :key="index" class="swiper-slide">
          <img class="img-wrap" :src="img" />
        </div>
      </div>
      <div class="text serif-text">留連時有限，繾綣意難終。</div>
      <div class="scroll-wrap">
        <div class="scroll-indocator" />
      </div>
    </div>
    <Schedule />
    <Project />
    <About />
  </div>
</template>

<script>
import Schedule from '../components/home/Schedule'
import Project from '../components/home/Project'
import About from '../components/home/About'
import Loading from '../components/Loading'
export default {
  components: {
    Schedule,
    Project,
    About,
    Loading,
  },
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
      windowWidth: null,
    }
  },
  computed: {
    loadingShow() {
      return this.$store.state.loadingShow
    },
    resultImg() {
      if (this.windowWidth < 780) {
        return [
          require('~/assets/image/home/banner_m_1.png'),
          require('~/assets/image/home/banner_m_2.png'),
          require('~/assets/image/home/banner_m_3.png'),
        ]
      }
      return [
        require('~/assets/image/home/banner_1.png'),
        require('~/assets/image/home/banner_2.png'),
        require('~/assets/image/home/banner_3.png'),
      ]
    },
  },
  transition: 'default',
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.outerWidth
      window.addEventListener('resize', (e) => {
        this.windowWidth = e.target.outerWidth
      })
    })

    window.addEventListener('load', () => {
      setTimeout(() => {
        this.$store.commit('SET_LOADING_SHOW', false)
      }, 2000)
    })
  },
  beforeDestroy() {
    window.addEventListener('resize', (e) => {
      this.windowWidth = e.target.outerWidth
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

.default-enter-active,
.default-leave-active {
  transition: opacity 0.5s;
}
.default-enter,
.default-leave-to {
  opacity: 0;
}
.default-enter-to,
.default-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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

.text {
  position: absolute;
  top: calc(50% - 234px);
  left: calc(50% - 22px);
  font-size: 30px;
  writing-mode: vertical-rl;
  letter-spacing: 9px;
  animation: colorTransition 0.75s 0.5;
  color: #fff;
  z-index: 1;
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

@media screen and (min-width: $largeScreen) {
  .img-wrap {
    width: 100vw;
  }
}

@media screen and (max-width: $noteBook) {
  .text {
    font-size: 25px;
    top: calc(50% - 204px);
    left: calc(50% - 19px);
  }

  .content {
    font-size: 18px;
    height: 560px;
  }
}

@media screen and (max-width: $mobile) {
  .swiper-slide {
    height: 100vh;
    overflow: hidden;

    img {
      position: absolute;
      width: initial;
      height: 100%;
    }
  }

  .scroll-wrap {
    height: 70px;
    &::before,
    &::after {
      height: 70px;
    }
  }
}
</style>
