<template>
  <div class="container-wrap">
    <div class="left">
      <div class="items-list d-flex">
        <div class="items-wrap">
          <div class="title">PROJECT</div>
          <div class="items">
            <div class="item"><span class="serif-text">花束</span>Floral bouquet</div>
            <div class="item"><span class="serif-text">花圈</span>Wreath</div>
            <div class="item"><span class="serif-text">花禮/花盒/盆花</span>Floral box</div>
            <div class="item"><span class="serif-text">捧花/胸花</span>Bridal bouquet</div>
            <div class="item"><span class="serif-text">婚禮佈置</span>Wedding decor</div>
          </div>
        </div>
        <div class="items-wrap project-item">
          <div class="title">PROJECT</div>
          <div class="items">
            <div class="item">
              <span class="btn-text">Facebook</span>
              <b-icon icon="chevron-right" class="arrow-right" />
            </div>
            <div class="item">
              <span class="btn-text">Instagram</span>
              <b-icon icon="chevron-right" class="arrow-right" />
            </div>
          </div>
        </div>
        <div class="items-wrap">
          <div class="title">FOLLOW US</div>
          <div class="items">
            <div class="item">chuanflowers@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">CHUAN FLOWERS</div>
      <div class="subtitle serif-text">繾綣花藝工作室</div>
      <div class="area-number">40351</div>
      <div class="address serif-text">台中市西區長春街26巷1號</div>
      <div class="en-address">No. 1, Ln. 26, Changchun St., West Dist., Taichung City 40351, Taiwan</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style lang="scss" scoped>
.container-wrap {
  display: flex;
  justify-content: space-between;
  padding: 70px 10% 50px;
  background-color: $grey7;
}

.left {
  width: 70%;

  .items-wrap {
    margin-right: 87px;

    .item {
      margin-bottom: 23px;
      cursor: pointer;

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
}

.right {
  width: 30%;
  padding-left: 67px;
  padding-bottom: 347px;
  border-left: 1px solid $grey6;

  .title {
    font-size: 25px;
    color: $pink;
  }

  .subtitle {
    font-size: 19px;
  }

  .area-number {
    margin-top: 37px;
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
</style>
