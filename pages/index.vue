<template>
  <div>
    <transition name="fade">
      <Loading v-show="loadingShow" />
    </transition>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="num in 3" :key="num" class="swiper-slide">
          <img class="img-wrap" :src="require(`~/assets/image/home/banner_${num}.png`)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
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
      loadingShow: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loadingShow = false
      }, 2000)
    })
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.img-wrap {
  width: 100%;
}
</style>
