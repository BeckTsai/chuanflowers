<template>
  <div class="courses">
    <div class="courses-container">
      <div class="title">COURSES</div>
      <div class="line" />
      <div class="subtitle serif-text">畢業花束預購開放</div>
      <div class="date">2020/06/07</div>
      <div class="img-wrap">
        <img src="@/assets/image/courses/pic1.JPG" />
      </div>
      <div class="text serif-text" v-html="textList[0]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/pic2.png" />
      </div>
      <div class="text serif-text" v-html="textList[1]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/pic3.png" />
      </div>
      <div class="text serif-text" v-html="textList[2]" />
      <div class="img-wrap">
        <img src="@/assets/image/courses/pic4.png" />
      </div>
      <div class="text serif-text" v-html="textList[3]" />
      <div class="freight-text serif-text">台灣全島宅配運費 250 元，台中自取免運費。</div>
      <div class="link">
        <span class="btn-text serif-text">填寫訂購表單</span>
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
        '@/assets/image/courses/pic1.png',
        '@/assets/image/courses/pic2.png',
        '@/assets/image/courses/pic3.png',
        '@/assets/image/courses/pic4.png',
      ],
      textList: [
        '小時候最討厭大人說「當學生很幸福」，長大以後卻不斷不斷地回憶那段當學生的日子。<br/><br/>高中是我最喜歡的求學時代，身邊總是圍繞著各種強者，做什麼事都拼盡全力。高一買了人生第一把Bass，每天瘋狂練琴練到手發炎，和一起玩團的夥伴吵架然後吃飯和好。高三的日子充滿考不完的試，下課組隊去尿尿，中午一到就衝到福利社搶便當。畢業時在禮堂聽著蘇打綠的歌，看著這些重要的人，默默落下兩行道別的淚。<br/><br/>那時的幸福來自於整個教室裡的人都朝著同樣的目標努力，也因此產生一種革命情感，畢業多年都不會忘記那段日子。<br/><br/>今年畢業季準備了經典的向日葵，黃澄澄的像大好的未來。也有愛情花、鬱金香花束給想把握機會向喜歡的人告白的同學。<br/><br/>預購資訊<br/><br/>截止時間--- 6/7（日）23:00<br/> 取花時間--- 6/5（五）～6/28（日）平日13:00-21:00，週六日 11:00-19:00<br/> 若需於其他時間取花，請先訊息與我們確認時間。',
        '向日葵畢業花束<br/>款式｜藍・黑<br/>尺寸｜含包裝約 30x35 cm　980 元 ＊預購截止後恢復原價 1280 元',
        '滿天星畢業花束<br/>款式｜裸粉・黑<br/>尺寸｜含包裝約 50x55 cm　1280 元 ＊預購截止後恢復原價 1580 元',
        '鬱金香畢業花束<br/>尺寸｜含包裝約 35x40 cm　980 元 ＊預購截止後恢復原價 1080 元<br/>鬱金香花束會使用含苞狀態之花朵製作，建議用花當日取花，前一天取建議冷藏',
      ],
    }
  },
  transition: 'default',
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

.courses {
  background-color: $white;
}

.courses-container {
  width: 1043px;
  margin: 0 auto;
  padding-top: 172px;
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
  margin-top: 65px;
  width: 173px;
  border-bottom: 1px solid $grey3;
  transition: 0.4s;
  cursor: pointer;

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
