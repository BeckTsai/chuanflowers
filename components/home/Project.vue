<template>
  <div class="project-wrap">
    <div ref="projectTitle" :class="{ 'slide-up': projectTitleActive }">
      <div class="title">PROJECT</div>
      <div class="subtitle">Selected Works</div>
    </div>
    <div class="items-wrap">
      <div ref="project1" class="item-wrap" :class="{ 'slide-up': project1Active }">
        <div class="img-wrap" @click="$router.push('/project/floral_bouquet')">
          <img src="@/assets/image/home/floral-bouquet.png" alt="Floral bouquet" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花束</span>Floral bouquet</div>
        <div class="list">01</div>
      </div>
      <div ref="project2" class="item-wrap" :class="{ 'slide-up': project2Active }">
        <div class="img-wrap" @click="$router.push('/project/wreath')">
          <img src="@/assets/image/home/wreath.png" alt="Wreath" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花圈</span>Wreath</div>
        <div class="list">02</div>
      </div>
      <div ref="project3" class="item-wrap" :class="{ 'slide-up': project3Active }">
        <div class="img-wrap" @click="$router.push('/project/floral_box')">
          <img src="@/assets/image/home/floral-box.png" alt="Floral box" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">花禮/花盒/盆花</span>Floral box</div>
        <div class="list">03</div>
      </div>
      <div ref="project4" class="item-wrap" :class="{ 'slide-up': project4Active }">
        <div class="img-wrap" @click="$router.push('/project/bridal_bouquet')">
          <img src="@/assets/image/home/bridal-bouquet.png" alt="Bridal bouquet" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">捧花/胸花</span>Bridal bouquet</div>
        <div class="list">04</div>
      </div>
      <div ref="project5" class="item-wrap" :class="{ 'slide-up': project5Active }">
        <div class="img-wrap" @click="$router.push('/project/wedding_decor')">
          <img src="@/assets/image/home/wedding-decor.png" alt="Wedding decor" />
          <div class="mask" />
        </div>
        <div class="item-text"><span class="serif-text">婚禮佈置</span>Wedding decor</div>
        <div class="list">05</div>
      </div>
    </div>
    <div
      id="slider"
      ref="mobileProject"
      v-swiper="swiperOption"
      class="slider"
      :class="{ 'scroll-up': mobileProjectImageLimit }"
    >
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
import getImageLimit from '@/mixins/getImageLimit.js'

export default {
  mixins: [getImageLimit],
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
    projectTitleActive: false,
    project1Active: false,
    project2Active: false,
    project3Active: false,
    project4Active: false,
    project5Active: false,
    mobileProjectActive: false,
    project1ImageLimit: 0,
    project2ImageLimit: 0,
    project3ImageLimit: 0,
    project4ImageLimit: 0,
    project5ImageLimit: 0,
    mobileProjectImageLimit: 0,
  }),
  watch: {
    scrollPosition() {
      if (!this.projectTitleActive) {
        const projectTitleImageLimit = this.getImageLimit('projectTitle')
        this.projectTitleActive = projectTitleImageLimit < this.scrollPosition
      }

      if (!this.project1Active) {
        console.log(this.project1ImageLimit)
        console.log(this.scrollPosition)
        console.log(this.$refs.project1.getBoundingClientRect())
        this.project1Active = this.project1ImageLimit < this.scrollPosition
      }

      if (!this.project2Active) {
        this.project2Active = this.project2ImageLimit < this.scrollPosition
      }

      if (!this.project3Active) {
        this.project3Active = this.project3ImageLimit < this.scrollPosition
      }

      if (!this.project4Active) {
        this.project4Active = this.project4ImageLimit < this.scrollPosition
      }

      if (!this.project5Active) {
        this.project5Active = this.project5ImageLimit < this.scrollPosition
      }

      if (!this.mobileProjectActive) {
        this.mobileProjectActive = this.mobileProjectImageLimit < this.scrollPosition
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.project1ImageLimit = this.getPoisonHeight('project1')
      this.project2ImageLimit = this.getPoisonHeight('project2')
      this.project3ImageLimit = this.getPoisonHeight('project3')
      this.project4ImageLimit = this.getPoisonHeight('project4')
      this.project5ImageLimit = this.getPoisonHeight('project5')
      // this.mobileProjectImageLimit = this.getPoisonHeight('mobileProject')
    })
  },
}
</script>

<style lang="scss" scoped>
.set-scroll {
  transition: 1s linear;
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}

.scroll-position {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.set-opacity {
  transition: 1s 0.2s linear;
  opacity: 0;
}

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
  @extend .set-scroll;
}

.subtitle {
  margin-bottom: 153px;
  font-size: 18px;
  text-align: center;
  color: $grey3;
  @extend .set-scroll;
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
    @extend .set-opacity;
  }

  .img-wrap {
    overflow: hidden;
    cursor: pointer;
    @extend .set-scroll;

    img {
      width: 100%;
      transition: 0.7s;
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
  }

  .item-text {
    font-size: 18px;
    text-align: right;
    @extend .set-opacity;

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

.slide-up {
  .title,
  .subtitle {
    @extend .scroll-position;
  }

  .img-wrap {
    @extend .scroll-position;
  }

  .list,
  .item-text {
    opacity: 1;
    transition-duration: 1.4s;
  }
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

@media screen and (max-width: $pad) {
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
