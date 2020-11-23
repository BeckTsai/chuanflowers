<template>
  <div class="container-wrap">
    <div ref="footer" class="footer" :class="{ 'slide-up': active }">
      <div class="left position-relative">
        <div class="items-list d-xl-flex">
          <div class="items-wrap">
            <div class="title">PROJECT</div>
            <div class="items">
              <div class="item" @click="$router.push('/project/floral_bouquet')">
                <span class="serif-text">花束</span>Floral bouquet
              </div>
              <div class="item" @click="$router.push('/project/wreath')">
                <span class="serif-text">花圈</span>Wreath
              </div>
              <div class="item" @click="$router.push('/project/floral_box')">
                <span class="serif-text">花禮/花盒/盆花</span>Floral box
              </div>
              <div class="item" @click="$router.push('/project/bridal_bouquet')">
                <span class="serif-text">捧花/胸花</span>Bridal bouquet
              </div>
              <div class="item" @click="$router.push('/project/wedding_decor')">
                <span class="serif-text">婚禮佈置</span>Wedding decor
              </div>
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
              <div class="item mail">chuanflowers@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="copy-right">Copyright © CHUAN FLOWERS. All rights reserved.</div>
      </div>
      <div class="right">
        <div class="title">CHUAN Flowers</div>
        <div class="subtitle serif-text">繾綣</div>
        <div class="area-number">40349</div>
        <div class="address serif-text" @click="openWindow">
          台中市西區中美街299巷14號1樓
        </div>
        <div class="en-address" @click="openWindow">
          1F., No. 14, Ln. 299, Zhongmei St., West Dist., Taichung City 403, Taiwan
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setScroll from '../mixins/setScroll'

export default {
  mixins: [setScroll],
  data() {
    return {
      active: false,
    }
  },
  watch: {
    scrollPosition() {
      const imageLimit = this.getImageLimit('footer')
      if (!this.active) {
        this.active = imageLimit < this.scrollPosition
      }
    },
  },
  methods: {
    clickHandler(url) {
      window.open(url)
    },
    openWindow() {
      window.open('https://g.page/chuanflowers?share', 'google map')
    },
    getImageLimit(el) {
      return this.$refs[el].offsetTop + this.$refs[el].offsetHeight / 3
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

.container-wrap {
  padding: 70px 5% 50px;
  background-color: $grey7;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.left {
  width: 70%;
  @extend .set-scroll;

  .items-wrap {
    margin-right: 87px;

    .item {
      margin-bottom: 23px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        color: $pink;
      }

      &.mail {
        cursor: initial;
        color: $grey3;
      }

      .serif-text {
        margin-right: 12px;
      }
    }
  }

  .project-item {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $grey3;
      transition: 0.4s;

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
  }

  .title {
    margin-bottom: 31px;
    font-size: 22px;
    color: $pink;
  }

  .copy-right {
    position: absolute;
    bottom: 0;
    left: 0;
    color: $pink;
  }
}

.right {
  width: 30%;
  padding-left: 67px;
  padding-bottom: 347px;
  border-left: 1px solid $grey6;
  @extend .set-scroll;

  .title {
    font-size: 25px;
    color: $pink;
  }

  .subtitle {
    margin-top: 20px;
    font-size: 19px;
  }

  .area-number {
    margin-top: 37px;
    font-size: 13px;
  }

  .address {
    font-size: 13px;
    cursor: pointer;
  }

  .en-address {
    margin-top: 22px;
    font-size: 12px;
    cursor: pointer;
  }
}

.slide-up {
  .left,
  .right {
    @extend .scroll-position;
  }
}

@media screen and (max-width: $noteBook) {
  .left {
    .title {
      margin-bottom: 20px;
      font-size: 18px;
    }

    .items-wrap {
      .item {
        margin-bottom: 10px;
        font-size: 13px;
      }
    }

    .copy-right {
      font-size: 13px;
    }
  }

  .right {
    padding-bottom: 162px;

    .title {
      font-size: 20px;
    }

    .subtitle {
      margin-top: 10px;
      font-size: 15px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .container-wrap {
    padding: 40px 18px 0 16px;
  }

  .footer {
    flex-direction: column-reverse;
  }

  .right {
    width: initial;
    padding-left: 0;
    padding-bottom: 71px;
    padding-right: 86px;
    border-left: none;
    border-bottom: 1px solid $grey6;

    .title {
      font-size: 20px;
      letter-spacing: 2px;
    }

    .subtitle {
      margin-top: 8px;
      letter-spacing: 1.5px;
      font-size: 15px;
    }

    .area-number {
      margin-top: 30px;
      font-size: 13px;
    }

    .address {
      font-size: 13px;
    }

    .en-address {
      margin-top: 22px;
      font-size: 12px;
    }
  }

  .left {
    padding-top: 71px;
    width: initial;

    .title {
      font-size: 18px;
      margin-bottom: 19px;
    }

    .items-wrap {
      .item {
        margin-bottom: 19px;
        font-size: 13px;

        &:last-child {
          margin-bottom: 41px;
        }

        &.mail {
          margin-top: 15px;
          font-size: 15px;
        }
      }
    }

    .project-item {
      .item {
        width: 125px;
        font-size: 15px;
        padding-bottom: 7px;
      }
    }
    .copy-right {
      position: static;
      margin-top: 96px;
      margin-bottom: 19px;
      font-size: 12px;
    }
  }
}
</style>
