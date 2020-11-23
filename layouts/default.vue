<template>
  <div :class="[{ 'scroll-active': scrollActive }]">
    <transition name="fade">
      <Loading v-show="loadingShow" />
    </transition>
    <transition name="fadeOut">
      <div v-if="btnStatus" class="mask" />
    </transition>
    <transition name="scroll">
      <Menu v-show="btnStatus" class="menu" :btn-status="btnStatus" @changeRoute="changeRoute" />
    </transition>
    <div class="cover-bg" />
    <div class="logo" @click="$router.push('/')">
      <img src="~/assets/image/home/logo.png" alt="chuanflowers" />
    </div>
    <div
      :class="[
        'menu-btn',
        { 'menu-active': btnStatus },
        { 'other-page': $route.path !== '/' && $route.path !== '/project' },
      ]"
      @click="btnStatus = !btnStatus"
    >
      <div class="menu-line" />
      <div class="menu-line" />
      <div class="menu-text">Menu</div>
    </div>
    <Nuxt />
    <tplFooter />
  </div>
</template>
<script>
import tplFooter from '@/components/Footer'
import Menu from '@/components/Menu'
import banner from '@/assets/image/project/banner_2.png'
import Loading from '../components/Loading'

export default {
  components: {
    tplFooter,
    Menu,
    Loading,
  },
  data() {
    return {
      btnStatus: false,
      scrollActive: false,
      status: false,
    }
  },
  computed: {
    loadingShow() {
      return this.$store.state.loadingShow
    },
  },
  mounted() {
    this.swiperHeight()
    window.scrollTo({ top: 0 })
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.$store.commit('SET_LOADING_SHOW', false)
      }, 2000)
    })
  },
  beforeDestroy() {
    this.swiperHeight()
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.$store.commit('SET_LOADING_SHOW', false)
      }, 2000)
    })
  },
  methods: {
    swiperHeight() {
      let that = this
      window.addEventListener('scroll', function () {
        that.scrollActive = this.scrollY > this.outerHeight
      })
    },
    changeRoute() {
      this.btnStatus = false
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `http://www.chuanflowers.com${banner}`,
        },
      ],
    }
  },
  provide() {
    return {
      clickBtn() {
        this.btnStatus = !this.btnStatus
      },
    }
  },
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Averia Serif Libre', cursive, 'Noto Serif TC', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $grey3;
  user-select: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.serif-text {
  font-family: 'Noto Serif TC', serif;
}
</style>

<style lang="scss" scoped>
.scroll-enter-active,
.scroll-leave-active {
  transition: 0.5s 0.5s cubic-bezier(0.75, 0.165, 0.715, 0.585);
}

.scroll-leave-active {
  transition-delay: 0.7s;
}

.scroll-enter,
.scroll-leave-to {
  transform: translate3d(0, -100%, 0);
}

.scroll-enter-to,
.scroll-leave {
  transform: translate3d(0, 0, 0);
}

.fadeOut-enter,
.fadeOut-leave-to {
  opacity: 0;
}

.fadeOut-enter-active {
  transition: opacity 0.5s;
}

.fadeOut-leave-active {
  transition: opacity 0.5s 1s;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  90% {
    opacity: 0;
  }
  100% {
    display: none;
  }
}

@keyframes scrollFadeUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes scrollDown {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.15);
}

.logo {
  position: absolute;
  top: 33px;
  left: 96px;
  width: 118px;
  z-index: 3;
  cursor: pointer;

  img {
    width: 100%;
  }
}

.menu-show {
  display: none;
  animation: fadeOut 0.3s;
}

.menu-btn {
  position: absolute;
  width: 41px;
  height: 10px;
  top: 42px;
  right: 83px;
  z-index: 10;
  color: $white;
  cursor: pointer;
  user-select: none;
}

.menu-line {
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: $white;
  border: 1px solid $white;
  transition: transform 0.4s, top 0.4s 0.4s, background-color 0.5s;

  &:first-child {
    top: 0;
    margin-bottom: 5px;
  }
}

.menu-text {
  position: absolute;
  top: 100%;
  animation: scrollFadeUp 0.4s;
}

.other-page.menu-btn {
  color: #000;

  .menu-line {
    background: #000;
    border-color: #000;
  }
}

.menu-active {
  position: fixed;
  .menu-line {
    top: 50%;
    transform: rotate(45deg);
    background: #000;
    border-color: #000;
    transition: top 0.4s, transform 0.4s 0.4s, border-color 0.4s 0.4s;

    &:first-child {
      transform: rotate(-45deg);
    }
  }

  .menu-text {
    opacity: 0;
    transition: opacity 0.4s;
    animation: fadeOutDown 0.4s;
  }
}

.cover-bg {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fff;
  transform: translate3d(0, -100%, 0);
  transition: 0.4s;
  z-index: 3;
}

.scroll-active {
  .cover-bg {
    transform: translate3d(0, 0, 0);
  }

  .menu-line {
    background-color: #000;
    border-color: #000;
  }

  .menu-text {
    color: #000;
  }

  .menu-btn,
  .logo {
    position: fixed;
    animation: scrollDown 1s;
  }

  .menu-btn {
    top: 27px;
  }

  .logo {
    width: 100px;
    top: 23px;
  }
}

@media screen and (max-width: $noteBook) {
  .menu-btn {
    width: 35px;
    top: 27px;
  }
  .menu-text {
    font-size: 14px;
  }

  .logo {
    width: 100px;
    top: 23px;
  }
}

@media screen and (max-width: $mobile) {
  .logo {
    top: 16px;
    left: 22px;
    width: 80px;
  }

  .scroll-active .logo {
    top: 15px;

    width: 80px;
  }

  .menu-btn {
    top: 18px;
    right: 17px;
    width: 31px;
  }

  .scroll-active .menu-btn {
    top: 18px;
  }

  .menu-text {
    font-size: 12px;
  }

  .cover-bg {
    height: 56px;
  }
}
</style>
