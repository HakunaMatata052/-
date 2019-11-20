import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";

Vue.use(Router);

const router = new Router({
  /**
   * name: 组件名称 (需要开启缓存，路由组件名称与组件内名称必须一致，区分大小写)
   * meta：{
   *  title: 页面标题，
   *  keepAlive：是否开启缓存（开启缓存是组件内name，所以这里需要和routes的name配合）
   *  isTransition: 是否开启过渡动画
   * }
   */
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index/index.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "首页",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/goodsDetails/:id",
      name: "goodsDetails",
      component: () => import("@/views/goods/goodsDetails.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "商品详情",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("@/views/mine/wallet.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "我的贝彩",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/order/:type?",
      name: "order",
      component: () => import("@/views/mine/order.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "订单列表",
        isMember: false,
        isLogin: false
      }
    },

    {
      path: "/buy/:id",
      name: "buy",
      component: () => import("@/views/goods/buy.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "购买",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/views/mine/setting.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "资料设置",
        isMember: false,
        isLogin: false
      }
    },
    
    
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.index != undefined) {
    store.state.tabActiveIndex = to.meta.index;
  }
  if (to.meta.isLogin) {
    if (!window.localStorage.getItem("token")) {
      if (from.name == "login") {
        router.push("/");
      } else {
        router.push("/login/" + from.name);
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach(route => {
  // console.log(route)
  // console.log("跳转")
});

export default router;
