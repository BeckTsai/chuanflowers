<template>
  <div class="menu">
    <div class="left">
      <div class="title">CATEGORY</div>
      <div class="nav-wrap">
        <div class="nav" @click="changeRoute('/')">
          <span class="nav-line" />
          HOME
          <span class="serif-text">首頁</span>
        </div>
        <div class="nav" @click="changeRoute('/courses')">
          <span class="nav-line" />
          COURSES
          <span class="serif-text">檔期活動</span>
        </div>
        <div class="nav" @click="changeRoute('/project')">
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
      <img src="@/assets/image/menu/pic1.png" />
    </div>
  </div>
</template>

<script>
export default {
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
.menu {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: $pink;
}

.left {
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
        margin-top: 10px;
        margin-bottom: 10px;
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
  width: 39%;
  img {
    width: 100%;
  }
}

@media screen and (max-width: $noteBook) {
  .left {
    padding: 97px 0 0 83px;
    .nav-wrap {
      margin: 34% 0 36%;

      .nav {
        font-size: 25px;
        letter-spacing: 2.5px;

        &:nth-child(2) {
          margin: 10px 0;
        }
      }
    }

    .items-wrap {
      margin-bottom: 41px;
      .title {
        margin-bottom: 18px;
        font-size: 22px;
        color: $grey1;
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
}
</style>
