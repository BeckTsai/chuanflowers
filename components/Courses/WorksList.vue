<template>
  <div class="list-wrap">
    <div v-for="(item, idx) in resultList" :key="idx" class="img-wrap" @click="$router.push(`/project/${item.name}`)">
      <img :src="item.img" :alt="item.enText" />
      <p>
        <span class="serif-text">{{ item.zhText }}</span>
        {{ item.enText }}
      </p>
      <div class="mask" />
    </div>
    <div id="slider" v-swiper="swiperOption" class="slider">
      <div class="swiper-wrapper">
        <div v-for="(item, idx) in resultList" :key="`img-${idx}`" class="swiper-slide">
          <div class="item" @click="$router.push(`/project/${item.name}`)">
            <img v-lazy="item.img" class="img" />
            <div class="item-text">
              <span class="serif-text">{{ item.zhText }} </span>{{ item.enText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      swiperOption: {
        width: 307,
        speed: 1000,
      },
      imgList: [
        {
          name: 'floral_bouquet',
          img: require('@/assets/image/courses/Floral_bouquet.png'),
          zhText: '花束',
          enText: 'Floral bouquet',
        },
        { name: 'wreath', img: require('@/assets/image/courses/Wreath.png'), zhText: '花圈', enText: 'Wreath' },
        {
          name: 'floral_box',
          img: require('@/assets/image/courses/Floral_box.png'),
          zhText: '花禮/花盒/盆花',
          enText: 'Floral box',
        },
        {
          name: 'bridal_bouquet',
          img: require('@/assets/image/courses/Bridal_bouquet.png'),
          zhText: '捧花/胸花',
          enText: 'Bridal bouquet',
        },
        {
          name: 'wedding_decor',
          img: require('@/assets/image/courses/Wedding_decor.png'),
          zhText: '婚禮佈置',
          enText: 'Wedding decor',
        },
      ],
    }
  },
  computed: {
    resultList() {
      let resultList = []
      this.imgList.forEach((item) => {
        if (item.name !== this.$route.params.project) {
          resultList.push(item)
        }
      })

      return resultList
    },
  },
}
</script>

<style lang="scss" scoped>
.list-wrap {
  display: flex;
  flex-wrap: wrap;
}

.img-wrap {
  position: relative;
  margin-right: 48px;
  margin-bottom: 56px;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(3) {
    margin-right: 0;
  }

  > p {
    margin-top: 13px;
    font-size: 15px;
    letter-spacing: 1.2px;
  }

  > img {
    transition: 0.7s;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 36px);
    transition: 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .mask {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}

#slider {
  display: none;
}

@media screen and (max-width: $noteBook) {
  .img-wrap {
    width: 267px;
    margin-right: 48px;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: $pad) {
  .list-wrap {
    display: block;
  }
  .img-wrap {
    display: none;
  }

  #slider {
    display: block;
  }

  .item {
    position: relative;
    width: 100%;
    height: 292px;
    margin: 0 auto;
    padding-top: 20px;
    padding-left: 20px;

    img {
      width: 100%;
    }
  }
}
</style>
