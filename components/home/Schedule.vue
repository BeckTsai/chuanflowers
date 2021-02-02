<template>
  <div class="schedule-content-wrap" :class="{ 'slide-up': active }">
    <div class="schedule-contain">
      <div ref="scheduleContent" class="schedule-content">
        <div class="schedule-title">
          <span class="title">COURSES</span>
          <span class="line" />
          <span class="text serif-text">檔期活動</span>
        </div>
        <div class="img-wrap">
          <img src="@/assets/image/courses/01.jpg" />
        </div>
        <div class="content-wrap">
          <!-- <div class="text serif-text">檔期活動</div> -->
          <div class="content-top serif-text">
            <div class="inner-title">年節花藝課程</div>
            <div class="inner-text">
              學了花藝之後每年過年我媽都叫我要帶一盆花回家，說初一別人來家裡玩她可以拿來炫耀，很有面子，順便幫我打廣告。
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          <div class="btn-text-wrap" @click="$router.push('courses')">
            <span class="btn-text">Read More</span>
            <b-icon icon="chevron-right" class="arrow-right" />
            <div class="btn-line" />
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
  watch: {
    scrollPosition() {
      const imageLimit = this.getImageLimit('scheduleContent')
      if (!this.active) {
        this.active = imageLimit < this.scrollPosition
      }
    },
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

.schedule-content-wrap {
  background-color: $grey7;
  color: $grey3;
}

.schedule-contain {
  padding: 10% 10% 7% 11%;
}

.schedule-content {
  display: flex;
  position: relative;
}

.schedule-title {
  position: absolute;
  width: 100%;
  top: 40px;
  left: 60px;
  font-size: 35px;
  letter-spacing: 7px;
  z-index: 1;
  @extend .set-scroll;

  .title {
    display: inline-block;
    vertical-align: middle;
  }

  .text {
    padding-left: 2px;
    font-size: 22px;
    letter-spacing: 2.2px;
    vertical-align: initial;
    background-color: $grey7;
  }
}

.line {
  display: inline-block;
  margin-left: -4px;
  width: 32vw;
  height: 1px;
  background-color: $grey3;
  vertical-align: middle;
}

.img-wrap {
  width: 53%;
  @extend .set-scroll;

  > img {
    width: 100%;
  }
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 32%;
  margin-left: 8%;
  @extend .set-scroll;

  .text {
    position: absolute;
    padding-left: 2px;
    top: 49px;
    left: -9px;
    font-size: 22px;
    letter-spacing: 2.2px;
    vertical-align: middle;
    background-color: $grey7;
  }
}

.content-top {
  font-size: 14px;

  .inner-title {
    margin-bottom: 11px;
    color: $pink;
    font-size: 20px;
    letter-spacing: 2px;
  }

  .inner-text {
    width: 423px;
    letter-spacing: 2.8px;
    line-height: 30px;
  }
}

.btn-wrap {
  position: absolute;
  bottom: 40px;
  right: 0;
  font-size: 18px;
  text-align: right;
  cursor: pointer;
  @extend .set-scroll;

  .btn-text-wrap {
    display: inline-block;
    width: 169px;

    &:hover {
      color: $pink;

      .arrow-right {
        transform: translateX(100%);
      }

      .btn-line {
        opacity: 0;
      }
    }
  }

  .btn-text {
    margin-right: 55px;
    transition: 0.4s;
  }

  .btn-line {
    height: 1px;
    background-color: $grey3;
    transition: 0.4s;
  }

  .arrow-right {
    transition: 0.4s;
  }
}

.slide-up {
  .content-wrap,
  .schedule-title,
  .btn-wrap {
    @extend .scroll-position;
  }

  .img-wrap {
    @extend .scroll-position;
  }
}

@media screen and (max-width: $noteBook) {
  .schedule-title {
    font-size: 25px;
    top: 34px;
  }

  .content-wrap {
    .text {
      top: 41px;
      left: -18px;
      padding-left: 15px;
      font-size: 16px;
    }
  }

  .content-top {
    .inner-title {
      font-size: 15px;
      letter-spacing: 1.5px;
    }

    .inner-text {
      letter-spacing: 2.4px;
      line-height: 30px;
    }
  }

  .btn-wrap {
    font-size: 16px;
    .btn-line {
      margin-top: 5px;
    }

    .btn-text-wrap {
      width: 135px;
    }

    .btn-text {
      margin-right: 28px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .schedule-contain {
    padding: 32% 18px 7%;
  }

  .schedule-content {
    display: block;
  }

  .schedule-title {
    position: static;
    width: initial;
    font-size: 20px;
    margin-bottom: 25px;
    text-align: center;

    .text {
      display: inline-block;
      font-size: 14px;
      letter-spacing: 2.2px;
      vertical-align: middle;
      background-color: $grey7;
    }
  }

  .line {
    width: 66px;
  }

  .img-wrap {
    width: 100%;
  }

  .content-wrap {
    margin-left: 0;
    padding-top: 28px;
    width: 100%;

    .text {
      display: none;
    }
  }

  .content-top {
    font-size: 12px;

    .inner-title {
      margin-bottom: 11px;
      font-size: 15px;
      letter-spacing: 1.5px;
    }

    .inner-text {
      width: initial;
      letter-spacing: 2.4px;
      line-height: 30px;
    }
  }

  .btn-wrap {
    position: static;
    font-size: 15px;
    margin: 66px 0 15px;
    text-align: left;

    .btn-text-wrap {
      width: initial;
    }
  }
}
</style>
