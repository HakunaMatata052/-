<template>
  <div class="container">
    <navBar />
    <div class="main">
      <div class="menu">
        <div class="item">
          <div class="img">
            <img src="https://picsum.photos/50/50" />
          </div>
          <div class="right">
            <span style="color:#ff6069">修改头像</span>
            <van-icon name="play" class="ico" />
          </div>
        </div>
        <div class="item">
          <div class="text">修改昵称</div>
          <div class="right">
            <span>去设置</span>
            <van-icon name="play" class="ico" />
          </div>
        </div>
        <div class="item">
          <div class="text">修改昵称</div>
          <div class="right">
            <van-icon name="play" class="ico" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "setting",
  components: {
    navBar
  }
};
</script>

<style lang="less" scoped>
.main {
  padding: 30px 20px;
}
.menu {
  .item {
    background-color: #f7f7f7;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 3px;
    margin-bottom: 15px;
    .img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      padding-right: 20px;
      span {
        font-size: 15px;
        color: #999999;
        margin-right: 13px;
      }
      .ico {
        color: #e6e6e6;
      }
    }
    .text {
      padding-left: 26px;
      font-size: 15px;
      color: #333333;
    }
  }
}
</style>