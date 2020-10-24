<template>
  <div class="menu">
    <transition name="fadeIn">
      <div v-show="btnStatus" class="menu-container">
        <div class="left">
          <div class="title">CATEGORY</div>
          <div class="nav-wrap">
            <div class="nav" @click="changeRoute('/')" @mouseenter="current = 'pic2'" @mouseleave="current = 'pic1'">
              <span class="nav-line" />
              HOME
              <span class="serif-text">首頁</span>
            </div>
            <div
              class="nav"
              @click="changeRoute('/courses')"
              @mouseenter="current = 'pic3'"
              @mouseleave="current = 'pic1'"
            >
              <span class="nav-line" />
              COURSES
              <span class="serif-text">檔期活動</span>
            </div>
            <div
              class="nav"
              @click="changeRoute('/project')"
              @mouseenter="current = 'pic4'"
              @mouseleave="current = 'pic1'"
            >
              <span class="nav-line" />
              PROJECT
              <span class="serif-text">花藝作品</span>
            </div>
          </div>
          <div class="items-wrap project-item">
            <div class="title">FOLLOW US</div>
            <div class="items">
              <div class="item" @click="clickHandler('https://www.facebook.com/chuanflowers')">
                <span class="btn-text">Facebook</span>
                <b-icon icon="chevron-right" class="arrow-right" />
              </div>
              <div class="item" @click="clickHandler('https://www.instagram.com/chuanflowers')">
                <span class="btn-text">Instagram</span>
                <b-icon icon="chevron-right" class="arrow-right" />
              </div>
            </div>
          </div>
          <div class="items-wrap">
            <div class="title">CONTACT</div>
            <div class="items">
              <div class="item">chuanflowers@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="right">
          <transition name="fade">
            <img v-show="current === 'pic1'" src="@/assets/image/menu/pic1.png" />
          </transition>
          <transition name="fade">
            <img v-show="current === 'pic2'" src="@/assets/image/menu/pic2.png" />
          </transition>
          <transition name="fade">
            <img v-show="current === 'pic3'" src="@/assets/image/menu/pic3.png" />
          </transition>
          <transition name="fade">
            <img v-show="current === 'pic4'" src="@/assets/image/menu/pic4.png" />
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    btnStatus: Boolean,
  },
  data() {
    return {
      current: 'pic1',
    }
  },
  methods: {
    clickHandler(url) {
      window.open(url)
    },
    changeRoute(route) {
      this.$emit('changeRoute')
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s 1.3s cubic-bezier(0.75, 0.165, 0.715, 0.585);
}

.fadeIn-leave-active {
  transition-delay: 0s;
}

.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}

.menu {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: $pink;
}

.left {
  height: 100vh;
  padding: 21vh 0 0 6vw;

  .title {
    font-size: 12px;
    letter-spacing: 1.2px;
  }

  .nav-wrap {
    margin: 82px 0 100px;

    .nav {
      display: flex;
      align-items: center;
      margin-left: -10px;
      color: $grey1;
      font-size: 40px;
      letter-spacing: 4px;
      cursor: pointer;

      &:nth-child(2) {
        padding: 10px 0;
      }

      .nav-line {
        margin-right: 10px;
        width: 0;
        height: 1px;
        background-color: $grey3;
        transition: 0.3s;
      }

      .serif-text {
        margin-left: 5px;
        font-size: 18px;
        opacity: 0;
        transition: 0.3s;
        color: $grey3;
      }

      &:hover {
        color: $grey3;
        transition: 0.3s;

        .nav-line {
          width: 44px;
        }

        .serif-text {
          opacity: 1;
        }
      }
    }
  }

  .items-wrap {
    margin-top: 41px;
    .title {
      font-size: 18px;
      color: $grey1;
    }

    .items {
      .item {
        font-size: 15px;
      }
    }
  }
}

.project-item {
  .title {
    margin-bottom: 18px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 173px;
    margin-bottom: 13px;
    padding-bottom: 6px;
    border-bottom: 1px solid $grey3;
    transition: 0.4s;
    font-size: 18px;
    cursor: pointer;

    .arrow-right {
      transition: 0.4s;
    }

    &:hover {
      border-color: transparent;
      color: $grey1;

      .arrow-right {
        transform: translateX(100%);
      }
    }
  }
}

.right {
  position: relative;
  width: 39%;
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
  }
}

@media screen and (max-width: $noteBook) {
  .left {
    padding: 97px 0 0 83px;
    .nav-wrap {
      margin: 72px 0 87px;

      .nav {
        font-size: 35px;
        letter-spacing: 2.5px;

        .serif-text {
          font-size: 15px;
        }

        &:nth-child(2) {
          margin: 10px 0 10px -10px;
        }
      }
    }

    .items-wrap {
      margin-bottom: 41px;
      .title {
        margin-bottom: 18px;
        font-size: 18px;
      }

      .items {
        .item {
          font-size: 16px;
        }
      }
    }

    .project-item {
      .item {
        width: 126px;
        font-size: 15px;
      }
    }
  }

  .right {
    img {
      width: initial;
      height: 100%;
    }
  }
}

@media screen and (max-width: $mobile) {
  .right {
    display: none;
  }

  .left {
    padding: 25px 0 0 19px;

    .nav-wrap {
      margin: 54px 0 70px;

      .nav {
        font-size: 30px;
        &:nth-child(2) {
          margin: -8px 0 -8px -10px;
        }
      }
    }

    .item-wrap {
      .title {
        font-size: 18px;
      }

      .items {
        .item {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
