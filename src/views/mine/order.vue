<template>
  <div class="container">
    <navBar title>
      <van-tabs v-model="activeType" slot="title">
        <van-tab title="全部" :name="1"></van-tab>
        <van-tab title="待付款" :name="2"></van-tab>
        <van-tab title="待发货" :name="3"></van-tab>
        <van-tab title="待收货" :name="4"></van-tab>
      </van-tabs>
    </navBar>
    <div class="main">
      <div class="order-list">
        <div class="item" v-for="(item,i) in 5" :key="i">
          <p>订单号20191106110619960928</p>
          <div class="content">
            <div class="img">
              <img src="https://picsum.photos/87/87" alt />
            </div>
            <div class="info">
              <h3>¥928.00</h3>
              <p>剩余库存：928件</p>
              <p>2019.11.06 11:06购买</p>
              <div class="tag">待付款</div>
            </div>
          </div>
          <div class="btn">立即付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "order",
  components: {
    navBar
  },
  data() {
    return {
      activeType: this.$route.params || 1,
      list: []
    };
  }
};
</script>
<style lang="less" scoped>
.order-list {
  .item {
    padding: 30px 15px 68px;
    &:nth-child(2n) {
      background-color: #fafafa;
    }
    p {
      font-size: 13px;
      color: #999999;
      margin-bottom: 13px;
    }
    .content {
      display: flex;
      align-items: center;
      .img {
        width: 87px;
        height: 87px;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 10px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        object-fit: cover;
        }
      }
      .info {
        text-align: left;
        padding: 10px 0;
        font-size: 13px;
        flex-grow: 1;
        h3 {
          font-family: Bahnschrift;
          font-weight: bold;
          font-size: 22px;
          color: #000000;
        }
        p {
          color: #999999;
          margin: 0;
        }
        .tag {
          margin-top: 5px;
          color: #ff546a;
        }
      }
    }
    .btn {
      float: right;
      width: 100px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      background-color: #f0f0f0;
      border-radius: 19px;
      font-size: 15px;
      color: #333333;
      &.c {
        background-image: linear-gradient(23deg, #ff346c 0%, #ff8b66 100%),
          linear-gradient(#f0f0f0, #f0f0f0);
        background-blend-mode: normal, normal;
        color: #fff;
      }
    }
  }
}
</style>