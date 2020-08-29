<template>
  <div class="schedule-content-wrap">
    <div class="schedule-contain">
      <div class="schedule-content">
        <div class="schedule-title">
          <span class="title">COURSES</span>
          <span class="line" />
          <span class="text serif-text">檔期活動</span>
        </div>
        <div class="img-wrap">
          <img src="~/assets/image/home/courses-banner.png" />
        </div>
        <div class="content-wrap">
          <div class="text serif-text">檔期活動</div>
          <div class="content-top serif-text">
            <div class="inner-title">畢業花束預購開放</div>
            <div class="inner-text">
              小時候最討厭大人說當學生很幸福，長大卻不斷不斷地回憶那段當學生的日子。畢業只有一次，選一束花給陪你度過青春的朋友吧！
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
  top: 57px;
  left: 60px;
  font-size: 35px;
  letter-spacing: 7px;

  .title {
    display: inline-block;
    vertical-align: middle;
  }

  .text {
    display: none;
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

  > img {
    width: 100%;
  }
}

.content-wrap {
  position: relative;
  width: 32%;
  margin-left: 8%;

  .text {
    position: absolute;
    padding-left: 2px;
    top: 67px;
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
  margin-top: 22%;
  margin-right: -100px;
  font-size: 18px;
  text-align: right;
  cursor: pointer;

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
    background-color: #000;
    transition: 0.4s;
  }

  .arrow-right {
    transition: 0.4s;
  }
}

@media screen and (max-width: $noteBook) {
  .schedule-title {
    font-size: 25px;
    top: 34px;
  }

  .content-wrap {
    padding-top: 14%;
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
    .btn-line {
      margin-top: 5px;
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
    font-size: 15px;
    margin-right: 0;
    text-align: left;

    .btn-text-wrap {
      width: initial;
    }
  }
}
</style>
