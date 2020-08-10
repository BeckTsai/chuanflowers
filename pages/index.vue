<template>
  <div>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="num in 3" :key="num" class="swiper-slide">
          <img class="img-wrap" :src="require(`~/assets/image/home/banner_${num}.png`)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <Schedule />
    <!-- <Project /> -->
    <About />
  </div>
</template>

<script>
import Schedule from '../components/home/Schedule'
// import Project from '../components/home/Project'
import About from '../components/home/About'
export default {
  components: {
    Schedule,
    // Project,
    About,
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
    }
  },
}
</script>

<style lang="scss" scoped>
.img-wrap {
  width: 100%;
}
</style>
