<template>
  <div style="position: relative">
    <div class="navbar" id="navbar">
      <div class="top" :style="'padding-top:'+ top +'px'"></div>
      <van-nav-bar @click-left="onClickLeft()" :z-index="999" :border="false">
        <template slot="title">
          <div class="title">
            <span>{{title}}</span>
            <slot name="title"></slot>
          </div>
        </template>
        <template slot="left">
          <svg-icon class="ico" icon-class="goback" v-if="goback" />
          <svg-icon class="ico" icon-class="menu" v-else />
        </template>
        <slot slot="right" name="right"></slot>
      </van-nav-bar>
    </div>
    <div class="navbar-empty" :style="'padding-top:'+ top +'px'"></div>
    <van-popup v-model="show" position="left" class="popup">
      <p>
        <svg-icon icon-class="close" @click="show = false" />
      </p>
      <div class="userinfo">
        <div class="avatar">
          <img src="https://picsum.photos/50/50" alt />
        </div>
        <div class="info">
          <h3>MIT007</h3>
          <h4>2019.11.06注册</h4>
        </div>
      </div>
      <div class="menu">
        <div
          class="item"
          v-for="(item,i) in menu"
          :key="i"
          @click="$router.push(item.path)"
        >{{item.name}}</div>
      </div>
      <p class="logout">退出登录</p>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      top: "",
      show: false,
      menu: [
        { name: "我的贝彩", path: "/wallet" },
        { name: "我的订单", path: "/order" },
        { name: "账号安全", path: "/wallet" },
        { name: "资料设置", path: "/wallet" }
      ]
    };
  },
  props: {
    title: {
      type: String,
      default() {
        return this.$route.meta.title;
      },
      required: false
    },
    goback: {
      type: Boolean,
      default() {
        return true;
      },
      required: false
    }
  },
  components: {},
  mounted() {
    var systemType = this.$store.state.systemType;
    if (systemType == "android") {
      this.top = 25;
    }
    if (systemType == "ios") {
      this.top = 40;
    }
  },
  methods: {
    onClickLeft() {
      if (this.goback) {
        this.$router.go(-1);
      } else {
        if (!this.$METHOD.getStore("token")) {
          this.$router.push("/login");
        } else {
          this.show = true;
        }
      }
    }
  }
};
</script>
<style lang="less">
.nobg .van-hairline--bottom::after {
  border-bottom-width: 0;
}
</style>

<style lang="less" scoped>
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  .title {
    span {
      font-weight: bold;
    }
  }
  .left,
  .right {
    font-size: 20px;
  }
  .ico {
    position: relative;
    top: 5px;
  }
}
.navbar-empty {
  height: 46px;
}
.popup {
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  padding: 35px 25px 50px;
  display: flex;
  flex-flow: column;
  .userinfo {
    display: flex;
    margin: 40px 0;
    align-items: center;
    .avatar {
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .info {
      h3 {
        font-size: 15px;
        color: #999999;
      }
      h4 {
        font-size: 13px;
        color: #999999;
      }
    }
  }

  .menu {
    font-size: 15px;
    line-height: 50px;
    color: #000000;
    text-align: center;
    flex-grow: 1;
  }
  .logout {
    font-size: 15px;
    color: #999999;
    text-align: center;
  }
}
</style>


