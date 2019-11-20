<template>
  <div class="contain">
    <navBar />
    <div class="main">
      <div class="info">
        <h3>贝彩余额</h3>
        <p>
          <span>¥</span> 19,969.28
        </p>
      </div>
      <div class="menu">
        <div class="item" style="width:150px">贝彩明细</div>
        <div class="item" style="width:210px">我的订单</div>
        <div class="item" style="width:135px">联系客服</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "wallet",
  components: {
    navBar
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 50px;
}
.info {
  margin-bottom: 35px;
  h3 {
    font-size: 15px;
    color: #333333;
  }
  p {
    font-size: 30px;
    color: #333333;
    font-family: Bahnschrift;
    font-weight: bold;
    span {
      font-size: 15px;
      color: #333333;
    }
  }
}
.menu {
  .item {
    height: 50px;
    line-height: 50px;
    background-color: #f7f7f7;
    border-radius: 25px;
    margin-bottom: 15px;
    text-indent: 26px;
  }
}
</style>