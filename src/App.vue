<template>
  <div id="app">
    <!-- 全局组件 -->
    <transition :name="transitionName">
      <keep-alive :max="10" :include="keepAlive">
        <router-view/>
      </keep-alive>
    </transition>
    <van-popup v-model="show" position="top" :overlay="false" :lock-scroll="false" :round="true">
      <div class="message" @click.stop="closeMessage">
        <h3>{{message.title}}</h3>
        <p>{{message.content}}</p>
      </div>
    </van-popup>
    
      <menuball />
  </div>
</template>
<script>
/* eslint-disable */
import router from "./router/router.js";
import menuball from "@/components/tabbar/menu.vue";
export default {
  name: "App",
  components:{
    menuball
  },
  data() {
    return {
      transitionName: "",
      keepAlive: [],
      push: null,
      show: false,
      message: {
        title: "",
        content: ""
      }
    };
  },
  created() {
    var that = this;
    // 递归路由设置KeepAlive  ***** 注意路由name必须和组件内的name一致 *****
    this.setRouteKeepAlive(router.options.routes);
    // 记录路由,动态给定动画
    this.$navigation.on("forward", to => {
      this.transitionName = to.route.meta.isTransition ? "slide-left" : "";
    });
    this.$navigation.on("back", (to, from) => {
      if (to.route.meta.isTransition || from.route.meta.isTransition) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "";
      }
    });
    if (window.navigator.userAgent.match(/APICloud/i)) {
      api.setStatusBarStyle({
        style: "dark",
        color: "rgba(255,255,255,0)"
      });
      that.$store.state.systemType = api.systemType;
      //关闭启动图
      api.removeLaunchView({
        animation: { type: "fade", duration: 0 }
      });
      // 更新
      api.addEventListener(
        {
          name: "smartupdatefinish"
        },
        function(ret, err) {
          that.$dialog
            .confirm({
              title: "更新",
              message: "APP更新完成，是否现在重启？"
            })
            .then(() => {
              api.rebootApp();
            });
        }
      );
      this.push = api.require("push");
      this.push.setListener(function(ret, err) {
        if (ret) {
          var content = JSON.parse(ret.data);
          var des = content.c.replace("<br>", "");
          api.notification({
            notify: {
              title: content.t,
              content: des
            }
          });
          that.message.title = content.t;
          that.message.content = des;
          that.show = true;
          setTimeout(() => {
            that.show = false;
          }, 3000);
          var message = [];
          if (that.$METHOD.getStore("message")) {
            message = that.$METHOD.getStore("message");
          } else {
            message = "[]";
          }
          message = JSON.parse(message);
          message.push(content);
          that.$METHOD.setStore("message", message);
          that.$store.state.message = new Date().getTime();
        }
      });

      this.allEvent();
    }
    this.setVux();
  },
  mounted() {
    // console.log(this.keepAlive); // 设置缓存匹配
  },
  methods: {
    setRouteKeepAlive(routes) {
      routes.map(item => {
        if (item.children && Array.isArray(item.children)) {
          this.setRouteKeepAlive(item.children);
        } else {
          if (item.meta && item.meta.keepAlive) {
            this.keepAlive.push(item.name);
          }
        }
      });
    },
    closeMessage() {
      this.$router.push("/message");
      this.show = false;
    },
    allEvent() {
      var that = this;
      api.addEventListener(
        {
          name: "swiperight"
        },
        function(ret, err) {
          if (
            that.$route.name == "home" ||
            that.$route.name == "shop" ||
            that.$route.name == "message" ||
            that.$route.name == "mine"
          ) {
          } else {
            that.$router.go(-1);
          }
        }
      );
      //点击消息状态栏跳转
      api.addEventListener(
        {
          name: "noticeclicked"
        },
        function(ret, err) {
          that.$router.push("/message");
        }
      );
    },
    setVux() {
      if (this.$METHOD.getStore("token")) {
        this.$store.state.token = this.$METHOD.getStore("token");
        this.$SERVER.information().then(res => {
          this.$store.state.userInfo = res.data;
          this.$store.state.isActive = Boolean(res.data.setting);
          this.push.joinGroup(
            {
              groupName: "department"
            },
            function(ret, err) {}
          );
          this.push.bind(
            {
              userName: res.data.user_nickname,
              userId: res.data.use_rid
            },
            function(ret, err) {}
          );
        });
      }
    }
  }
};
</script>

<style lang="less" scope>
#app {
  font-family: "PingFang-SC-Medium", "PingFang SC", "Microsoft YaHei", Helvetica,
    Tahoma, Arial, "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei",
    sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 450ms;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  perspective: 800;
}
.slide-right-enter {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
.message {
  padding: 40px 15px 20px;
  h3 {
    color: #333;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 35px;
  }
}
</style>
