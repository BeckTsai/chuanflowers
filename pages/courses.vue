<template>
  <div class="courses">
    <div class="courses-container">
      <div class="title">COURSES</div>
      <div class="line" />
      <div class="subtitle serif-text">年節花藝課程</div>
      <div class="date">Feb. 2021</div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/01.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[0]" />
      <div class="img-wrap">
        <img :style="{ width: '48%' }" src="@/assets/image/courses/03.jpg" />
        <img :style="{ width: '48%' }" src="@/assets/image/courses/04.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[1]" />
      <div class="text serif-text" v-html="textList[2]" />
      <div class="link" @click="openUrl('https://forms.gle/NrWSrNa4zE2yw8dG9')">
        <span class="btn-text serif-text">日式注連繩花藝課</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="link" @click="openUrl('https://forms.gle/qXJzdM1BHkyVVQ6e8')">
        <span class="btn-text serif-text">春季歐式盆花花藝課</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="works-wrap">
        <div class="work-title">OTHER WORKS</div>
        <WorksList />
      </div>
    </div>
  </div>
</template>

<script>
import WorksList from '../components/Courses/WorksList'

export default {
  components: {
    WorksList,
  },
  data() {
    return {
      imgList: [
        // '@/assets/image/courses/pic1.png',
        // '@/assets/image/courses/pic2.png',
        // '@/assets/image/courses/pic3.png',
        // '@/assets/image/courses/pic4.png',
      ],
      textList: [
        '學了花藝之後每年過年我媽都叫我要帶一盆花回家，說初一別人來家裡玩她可以拿來炫耀，很有面子，順便幫我打廣告。',
        '年節課程有日式的乾燥花注連繩與歐式鮮花盆花，盆花課會搭配很多一年一度、春天才有的花材，用優雅的粉橘色系，很適合年節的氣氛又不會太俗氣。基礎的海綿盆花插作適合任何程度的同學體驗。',
        '❒ 年節期間若無法參加團體班，兩人以上報名可以直接私訊我們預約時間上課。課程資訊請參考報名表單。',
      ],
    }
  },
  transition: 'default',
  methods: {
    openUrl(url) {
      window.open(url, 'google forms')
    },
  },
}
</script>

<style lang="scss" scoped>
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

@keyframes slideUP {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.courses {
  background-color: $white;
}

.courses-container {
  width: 1043px;
  margin: 0 auto;
  padding-top: 172px;
  animation: slideUP 1s linear;
}

.title {
  font-size: 18px;
  text-align: center;
}

.line {
  width: 1px;
  height: 75px;
  margin: 19px auto 9px;
  background-color: $grey5;
}

.subtitle {
  color: $pink;
  font-size: 30px;
  letter-spacing: 3px;
  text-align: center;
}

.date {
  margin: 11px 0 44px;
  font-size: 18px;
  text-align: center;
}

.img-wrap {
  margin-top: 20px;
  width: 100%;

  img {
    width: 100%;
  }
}

.text {
  margin: 47px 0;
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 26px;
}

.freight-text {
  font-size: 14px;
  letter-spacing: 2.8px;
}

.link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 27px;
  width: fit-content;
  border-bottom: 1px solid $grey3;
  transition: 0.4s;
  cursor: pointer;

  &.long {
    width: 195px;
  }

  .btn-text {
    font-size: 16px;
    letter-spacing: 3.2px;
  }

  .arrow-right {
    transition: 0.4s;
  }

  &:hover {
    border-color: transparent;
    color: $pink;

    .arrow-right {
      transform: translateX(100%);
    }
  }
}

.works-wrap {
  padding-top: 105px;

  .work-title {
    margin-bottom: 77px;
    font-size: 15px;
    text-align: center;
  }
}

@media screen and (max-width: $noteBook) {
  .courses-container {
    width: 897px;
  }

  .title {
    font-size: 15px;
  }

  .subtitle {
    font-size: 20px;
  }

  .date {
    font-size: 15px;
  }

  .text {
    font-size: 13px;
  }
}

@media screen and (max-width: $mobile) {
  .courses-container {
    width: 339px;
    padding-top: 88px;
  }

  .title {
    font-size: 13px;
  }

  .subtitle {
    font-size: 18px;
  }

  .data {
    font-size: 13px;
  }

  .text {
    font-size: 12px;
  }
}
</style>
