<template>
  <div class="works">
    <div class="works-wrap">
      <div class="top">
        <div class="title">SELECTED WORKS</div>
        <div class="line" />
        <div class="subtitle">{{ resultList[0].enText }}</div>
        <div class="title serif-text">{{ resultList[0].zhText }}</div>
      </div>
      <div class="img-list">
        <div v-for="(item, idx) in imgItems" :key="idx" class="img-wrap">
          <img
            v-lazy="require(`@/assets/image/project${item.src}`)"
            :class="[{ 'straight-picture': item.isStraight }]"
          />
          <div class="mask"></div>
        </div>
      </div>
      <div class="works-title">OTHER WORKS</div>
      <WorksList :route="route" />
    </div>
  </div>
</template>

<script>
import WorksList from '@/components/Courses/WorksList'
import imgList from '@/lib/imgList'
export default {
  components: {
    WorksList,
  },
  data() {
    return {
      route: this.$route.params.project,
      list: [
        {
          name: 'floral_bouquet',
          zhText: '花束',
          enText: 'Floral bouquet',
        },
        { name: 'wreath', zhText: '花圈', enText: 'Wreath' },
        {
          name: 'floral_box',
          zhText: '花禮/花盒/盆花',
          enText: 'Floral box',
        },
        {
          name: 'bridal_bouquet',
          zhText: '捧花/胸花',
          enText: 'Bridal bouquet',
        },
        {
          name: 'wedding_decor',
          zhText: '婚禮佈置',
          enText: 'Wedding decor',
        },
      ],
    }
  },
  computed: {
    imgItems() {
      return imgList[this.route]
    },
    resultList() {
      let resultList = []
      this.list.forEach((item) => {
        if (item.name === this.$route.params.project) {
          resultList.push(item)
          return
        }
      })

      return resultList
    },
  },
}
</script>

<style lang="scss" scoped>
.works {
  padding: 175px 0 77px;
  background-color: $white;
}

.works-wrap {
  width: 1043px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 15px;

  &.serif-text {
    margin-bottom: 137px;
  }
}

.line {
  width: 0.5px;
  height: 75px;
  margin: 23px auto 10px;
  background-color: $grey5;
}

.subtitle {
  font-size: 35px;
  color: $pink;
}

.img-list {
  display: flex;
  flex-wrap: wrap;
}

.img-wrap {
  position: relative;
  width: 310px;
  height: 174px;
  overflow: hidden;
  margin-right: 55px;
  margin-bottom: 85px;
  cursor: pointer;

  img {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    .mask {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}

.straight-picture {
  top: -147px;
}

.works-title {
  font-size: 15px;
  margin-bottom: 77px;
}
</style>
