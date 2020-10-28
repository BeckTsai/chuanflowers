<template>
  <div class="works">
    <div class="works-wrap">
      <div class="top">
        <div class="title">SELECTED WORKS</div>
        <div class="line" />
        <div class="subtitle">{{ resultList[0].enText }}</div>
        <div class="title serif-text">{{ resultList[0].zhText }}</div>
      </div>
      <div class="img-list">
        <div v-for="(item, idx) in imgItems" :key="idx" class="img-wrap" @click="clickHandler(idx)">
          <img
            v-lazy="require(`@/assets/image/project${item.src}`)"
            :class="[{ 'straight-picture': item.isStraight }]"
          />
          <div class="mask"></div>
        </div>
      </div>
      <div class="works-title">OTHER WORKS</div>
      <WorksList :route="route" />
    </div>
    <transition name="fade">
      <div v-if="popupStatus" class="swiper-contain">
        <div class="head">
          <div class="tag">
            <div class="subtitle">{{ resultList[0].enText }}</div>
            <div class="title serif-text">{{ resultList[0].zhText }}</div>
          </div>
          <div class="close-btn" @click="popupStatus = false">
            <b-icon icon="x" />
          </div>
        </div>
        <div class="swiper-top">
          <div id="swiper-top" ref="swiperTop" v-swiper="swiperOption" class="swiper-wrap">
            <div class="swiper-wrapper">
              <div v-for="(item, index) in imgItems" :key="`top-${index}`" class="swiper-slide">
                <img v-lazy="require(`@/assets/image/project${item.src}`)" />
              </div>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>
        <client-only>
          <swiper ref="swiperThumbs" class="swiper swiper-thumbs" :options="swiperOptionThumbs">
            <swiper-slide v-for="(item, index) in imgItems" :key="`thumbss-${index}`" class="swiper-slide">
              <img
                v-lazy="require(`@/assets/image/project${item.src}`)"
                :class="[{ 'straight-picture': item.isStraight }]"
                @click="onSwiperClick(index)"
              />
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </transition>
  </div>
</template>

<script>
import WorksList from '@/components/Courses/WorksList'
import imgList from '@/lib/imgList'
export default {
  components: {
    WorksList,
  },
  data() {
    return {
      route: this.$route.params.project,
      activeIndex: null,
      popupStatus: false,
      swiperOption: {
        speed: 1000,
        breakpoints: {
          375: { width: 375 },
          414: { width: 414 },
          768: { width: 768 },
          1280: { width: 1100 },
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        on: {
          init: () => {
            this.$nextTick(() => {
              this.onSwiperClick(this.activeIndex)
            })
          },
          slideChange: () => {
            this.activeIndex = this.$refs.swiperTop.swiper.activeIndex
          },
        },
      },
      swiperOptionThumbs: {
        speed: 1000,
        breakpoints: {
          375: { slidesPerView: 3 },
          414: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 9 },
        },
        spaceBetween: 19,
        centeredSlides: true,
      },
      list: [
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
    }
  },
  transition: 'default',
  computed: {
    imgItems() {
      return imgList[this.route]
    },
    resultList() {
      let resultList = []
      this.list.forEach((item) => {
        if (item.name === this.$route.params.project) {
          resultList.push(item)
          return
        }
      })

      return resultList
    },
    curIndex() {
      return this.$refs.swiperTop.activeIndex
    },
    realIndex() {
      return this.$refs
    },
  },
  watch: {
    activeIndex() {
      setTimeout(() => this.$refs.swiperThumbs.$swiper.slideTo(this.activeIndex), 100)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    onSwiperClick(index) {
      this.$refs.swiperTop.swiper.slideTo(index, 1000)
    },
    clickHandler(index) {
      this.activeIndex = index
      this.popupStatus = true
    },
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

.swiper-contain {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $white;
  z-index: 10;
}

.head {
  display: flex;
  justify-content: space-between;
  margin: 41px 87px 7% 94px;

  .subtitle {
    font-size: 30px;
  }

  .title {
    font-size: 15px;

    &.serif-text {
      margin-bottom: 0;
    }
  }

  .close-btn {
    width: 35px;
    height: 35px;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      color: #000;
      transition: 0.2s;

      &:hover {
        color: $pink;
      }
    }
  }
}

.swiper-top {
  .swiper-wrap {
    width: 1100px;
    margin: 0 auto;
  }
  .swiper-slide {
    height: 506px;

    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .swiper-button-white {
    outline: none;
    color: $pink;
  }
}

.swiper-thumbs {
  display: flex;
  margin-top: 4%;
  padding: 0 43px;
  .swiper-slide {
    position: relative;
    height: 101px;
    overflow: hidden;
    cursor: pointer;

    &.swiper-slide-active {
      border: 4px solid $pink;
    }

    img {
      position: absolute;
      display: block;
      margin: 0 auto;
      width: 100%;

      &.straight-picture {
        top: -109px;
      }
    }
  }
}

.swiper-button-next {
  right: 107px;
}

.swiper-button-prev {
  left: 107px;
}

.works {
  padding: 175px 0 77px;
  background-color: $white;
}

.works-wrap {
  width: 1150px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 15px;

  &.serif-text {
    margin-bottom: 137px;
  }
}

.line {
  width: 0.5px;
  height: 75px;
  margin: 23px auto 10px;
  background-color: $grey5;
}

.subtitle {
  font-size: 35px;
  color: $pink;
}

.img-list {
  display: flex;
  flex-wrap: wrap;
}

.img-wrap {
  position: relative;
  width: 310px;
  height: 174px;
  overflow: hidden;
  margin-right: 55px;
  margin-bottom: 85px;
  cursor: pointer;

  img {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    .mask {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}

.straight-picture {
  top: -147px;
}

.works-title {
  font-size: 15px;
  margin-bottom: 77px;
}

@media screen and (max-width: $noteBook) {
  .title {
    font-size: 15px;
  }
  .subtitle {
    font-size: 25px;
  }

  .date {
    font-size: 15px;
  }

  .swiper-top {
    .swiper-slide {
      height: 400px;
    }
  }

  .swiper-thumbs {
    .swiper-slide {
      height: 72px;
    }
  }

  .works-wrap {
    width: 897px;
  }

  .img-wrap {
    width: 267px;
    height: 150px;
    margin-right: 48px;
    margin-bottom: 71px;
  }

  .head {
    margin-bottom: 3%;
    .subtitle {
      font-size: 20px;
    }
    .title {
      font-size: 13px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .swiper-top {
    margin-top: 110px;
    .swiper-slide {
      height: 211px;
    }
    .swiper-button-white {
      top: 291px;
    }
  }

  .swiper-thumbs {
    margin-top: 90px;
    padding: 0 17px;

    .swiper-slide {
      height: 57px;
      &.swiper-slide-active {
        border: 2px solid $pink;
      }
    }
  }

  .swiper-button-prev {
    left: 17px;
  }

  .swiper-button-next {
    right: 17px;
  }

  .works {
    padding: 88px 0 51px;
    background-color: $white;
  }

  .title {
    font-size: 13px;

    &.serif-text {
      margin-bottom: 54px;
    }
  }

  .subtitle {
    font-size: 20px;
  }

  .works-wrap {
    width: 339px;
  }

  .img-wrap {
    position: relative;
    width: 158px;
    height: 90px;
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 23px;
    cursor: pointer;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &:nth-child(3n) {
      margin-right: auto;
    }
  }

  .works-title {
    margin-bottom: 41px;
  }

  .list-wrap {
    margin-left: -20px;
  }
  .head {
    margin: 15px 17px;

    .title {
      font-size: 13px;
    }

    .subtitle {
      font-size: 20px;
    }
  }
}
</style>
