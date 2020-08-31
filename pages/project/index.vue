<template>
  <div>
    <div id="slider" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="num in 3" :key="num" class="swiper-slide">
          <img class="img-wrap" :src="require(`~/assets/image/project/banner_${num}.png`)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-text serif-text">沒有一絲矯情，只有真實的情感。</div> -->
    </div>
    <div class="project-wrap">
      <div class="left">
        <div class="title">PROJECT</div>
        <div class="subtitle serif-text">工作室採預約制服務，請先訊息/電話預約</div>
        <div class="works-title">SELECTED WORKS</div>
        <WorksList class="list" />
      </div>
      <div class="right">
        <div class="title">CATEGORY</div>
        <div class="item"><span class="serif-text">花藝作品</span>Flowers</div>
        <div class="item" @click="$router.push('/courses')"><span class="serif-text">檔期活動</span>Courses</div>
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
    }
  },
}
</script>

<style lang="scss" scoped>
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
    }

    &:hover {
      color: $pink;
    }
  }
}

@media screen and (max-width: $noteBook) {
  .project-wrap {
    padding-top: 130px;
    padding-right: 77px;
  }

  .left {
    .list {
      width: initial;
    }
  }

  .right {
    width: 215px;
  }
}
</style>
