<template>
  <div class="courses">
    <div class="courses-container">
      <div class="title">COURSES</div>
      <div class="line" />
      <div class="subtitle serif-text">CHUAN Christmas</div>
      <div class="date">2020/11/23 - 2020/12/05</div>
      <div class="text serif-text" v-html="textList[0]" />
      <div class="link" @click="openUrl('https://forms.gle/q2QmRCeHjHrwG85e7')">
        <span class="btn-text serif-text">報名花藝課</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="link" @click="openUrl('https://forms.gle/YRkMK56KRuXCquS37')">
        <span class="btn-text serif-text">預購聖誕樹</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/S__19554349.jpg" />
      </div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/S__19554351.jpg" />
      </div>
      <div class="text serif-text" v-html="textList[1]" />
      <div class="link" @click="openUrl('https://forms.gle/q2QmRCeHjHrwG85e7')">
        <span class="btn-text serif-text">填寫報名課程表單</span>
        <b-icon icon="chevron-right" class="arrow-right" />
      </div>
      <div class="text serif-text" v-html="textList[2]" />
      <div class="text serif-text" v-html="textList[3]" />
      <div class="link long" @click="openUrl('https://forms.gle/YRkMK56KRuXCquS37')">
        <span class="btn-text serif-text">填寫聖誕節預購表單</span>
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
        '小時候家裡有一棵聖誕樹，塑膠製的，組合起來比我還高的那種。每年都會拉著媽媽一起去逛賣場挑新的裝飾品，各種顏色的吊球、星星、麋鹿、小人偶、金色的Merry Christmas，然後在12月開始時把它們一一掛上去，日子就像歐美節日電影那樣繽紛了。<br/><br/>那樣的儀式感帶來的快樂長大以後就少了，去百貨公司跟聖誕造景拍張照也就含糊過去了。現在的社會慶祝節日的選擇太多，似乎變相剝奪了自己創造的機會。<br/><br/>今年，自己做一棵聖誕樹吧。使用混合松柏從無到有的自己插出一棵樹，再加上喜歡的裝飾品。回到兒時期待樹下放了什麼禮物的純真，讓日子再一次繽紛起來。',
        '░課程資訊<br/><br/>🌲聖誕小樹仔課程<br/><br/>12/13（日）15:00-18:00<br/>12/16（三）19:00-22:00<br/>以上場次上限 3 人，額滿為止。<br/>地點｜繾綣    台中市西區中美街299巷14號1樓<br/>≣<br/>12/19（六）13:00-16:00<br/>12/20（日）18:00-21:00<br/>此場次上限 8 人，額滿為止。<br/>地點｜台中市中區成功路168號<br/><br/>費用｜2,500元/人，兩人以上同行、舊生報名九折ʕ•ᴥ•ʔ<br/><br/>內容｜新鮮松柏、乾燥裝飾品、木頭底座，完成總高度約 35 cm<br/><br/><br/>🌲聖誕圈圈仔課程 <br/><br/>12/18（五）19:00-22:00 <br/>此場次上限 3 人，額滿為止。<br/>地點｜繾綣    台中市西區中美街299巷14號1樓<br/>≣<br/>12/19（六）18:00-21:00  <br/>12/20（日）13:00-16:00<br/>以上場次上限 8 人，額滿為止。<br/>地點｜台中市中區成功路168號<br/><br/>費用｜2,200元/人，兩人以上同行、舊生報名九折ʕ•ᴥ•ʔ<br/><br/>內容｜新鮮松柏、乾燥裝飾品、藤圈，完成直徑約 30 cm',
        '░預購資訊<br/>12/5（六）23:59 截止<br/>12/7（一）起依預購順序陸續出貨，如需指定收貨日期請備註。<br/><br/>🌲聖誕小樹仔 <br/>小樹     35cm 紅金/銀灰   1580 元<br/>迷你樹  22cm 紅金/銀灰   980 元<br/><br/>截止後恢復原價 1980 /1280 元',
        '🌲聖誕圈圈仔<br/>30cm     1580 元<br/>20cm     980 元<br/><br/>截止後恢復原價 1980 /1280 元<br/><br/>🚀取貨方式與運費<br/>工作室自取 0 元<br/>台中市區配送 100 元 （中區、西區、南區、北區、東區、西屯區、南屯區、大里區）<br/>其他地區配送 250 元（黑貓宅急便）',
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
  width: 173px;
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
