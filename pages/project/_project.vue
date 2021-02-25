<template>
  <div class="works">
    <div>
      <div class="top">
        <div class="title">SELECTED WORKS</div>
        <div class="line" />
        <div class="subtitle">{{ resultList[0].enText }}</div>
        <div class="title serif-text">{{ resultList[0].zhText }}</div>
      </div>
      <div class="img-list">
        <div
          v-for="(item, idx) in imgItems"
          :key="`item-${item.src}`"
          class="img-wrap"
          :class="[item.type]"
          @click="clickHandler(idx)"
        >
          <img v-lazy="require(`@/assets/image/project${item.src}`)" />
          <div class="mask"></div>
        </div>
      </div>
      <div class="works-title">OTHER WORKS</div>
      <WorksList :route="route" class="works-list" />
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
  transition: opacity 1.2s;
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

.top {
  text-align: center;
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
  width: 1040px;
  margin: 0 auto;
  padding: 175px 0 77px;
  background-color: $white;
}

.works-wrap {
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
  width: 1040px;
  margin: 0 auto;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

.img-wrap {
  float: left;
  position: relative;
  overflow: hidden;
  margin-left: 11px;
  margin-bottom: 13px;
  cursor: pointer;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    transition: 0.5s;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

.small {
  width: 335px;
  height: 188px;
}

.middle {
  width: 335px;
  height: 389px;
}

.large {
  width: 681px;
  height: 389px;
}

.straight-picture {
  top: -147px;
}

.works-list {
  margin-left: 11px;
}

.works-title {
  margin: 131px 0 77px 11px;
  padding: 90px;
  border-top: 1px solid $grey6;
  font-size: 15px;
  text-align: center;
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
      img {
        position: absolute;
        display: block;
        margin: 0 auto;
        width: 100%;

        &.straight-picture {
          top: -90px;
        }
      }
    }
  }

  .works-wrap {
    width: 897px;
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

@media screen and (max-width: $pad) {
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
    width: 360px;
    padding: 88px 0 51px;
    background-color: $white;
  }

  .img-list {
    width: 360px;
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
    margin-left: 8px;
    margin-bottom: 8px;
  }

  .small {
    width: 110px;
    height: 62px;
  }

  .middle {
    width: 110px;
    height: 132px;
  }

  .large {
    width: 228px;
    height: 132px;
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
