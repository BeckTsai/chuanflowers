<template>
  <div class="courses">
    <div class="courses-container">
      <div class="title">COURSES</div>
      <div class="line" />
      <div class="subtitle serif-text">Mom! I love you</div>
      <div class="date">April. 2021</div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/01.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[0]" />
      <div class="link" @click="openUrl('https://forms.gle/bE3qq7zEqkeqaNFCA')">
        <span class="btn-text serif-text">填寫表單預購</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="text serif-text" v-html="textList[1]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/02.jpg" />
      </div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/03.jpg" />
      </div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/04.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[2]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/05.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[3]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/06.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[4]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/07.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[5]" />
      <div class="link" @click="openUrl('https://forms.gle/bE3qq7zEqkeqaNFCA')">
        <span class="btn-text serif-text">預購表單</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="text serif-text" v-html="textList[6]" />
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
        '今年也一樣，買束花謝謝媽媽，讓她知道你愛她。',
        '▰ 預購資訊 <br/>截止日 4/30（五），今年市場花量偏少，若額滿會提早公告截止<br/><br/>母親節花束 30 x 45 cm<br/>桃紫｜柔粉｜裸白<br/>預購價 $1,280 截止後恢復原價 $1,480',
        '迷你母親節花束 15 x 25 cm<br/>預購價 $400 截止後恢復原價 $500',
        '單枝康乃馨花束<br/>預購價 $300 截止後恢復原價 $350',
        '四枝康乃馨小花束<br/>預購價 $520 截止後恢復原價 $650',
        '取花日5/1（六） - 5/9（日）<br/>平日13:00-19:00，假日11:00-17:00<br/>外縣市冷藏宅配運費 250 元，台中市區配送運費 150 元<br/><br/>▰ 預購方式<br/>填寫表單並完成匯款即完成預購，預購完成後依指定日期出貨。',
        '▰ 注意事項<br/>· 因今年花市花量不穩定，單枝、四枝康乃馨花束預購時無法挑色，我們實際拿到花後會再公告色系，如欲更換顏色再請告知。<br/>· 包裝色系無法互換。<br/>· 如遇花材缺貨、短少將以相近顏色的等價花材替換，若非常介意請勿購買。',
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

@media screen and (max-width: $pad) {
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
