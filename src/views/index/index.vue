<template>
  <div class="container">
    <nav-bar :goback="false">
      <van-icon class-prefix="icon" name="lingdang" slot="right" />
    </nav-bar>
    <div class="main">
      <div class="box-wrapper">
        <div class="box" v-for="(item,index) in list" :key="index" @click="$router.push('/goodsDetails/1')">
          <van-image lazy-load :src="item.img" class="img"/>
          <div class="info">
            <div class="left">
              <h3>¥928.00</h3>
              <p>剩余库存：928件</p>
            </div>
            <div class="right">
              <svg-icon class="ico" icon-class="buy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "index",
  components: {
    navBar
  },
  data() {
    return {
      loading:false,
      finished:false,
      list: [
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/180"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/220"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/90"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/150"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/130"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/180"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/220"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/90"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/160"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/150"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/180"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/220"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/90"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/160"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/150"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/180"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/220"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/90"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/160"
        },
        {
          path: "/",
          title: "标题",
          img: "https://picsum.photos/150/130"
        }
      ]
    };
  },
  created() {
  },
  methods: {
    getList() {
   
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.box {
  break-inside: avoid;
  width: 150px;
  height: auto;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(27, 4, 3, 0.16);
  border-radius: 25px;
  display: inline-block;
  margin-bottom: 10px;
  .img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    padding: 10px 0;
    h3 {
      font-family: Bahnschrift;
      font-weight: bold;
      font-size: 22px;
      color: #000000;
    }
    p {
      font-size: 13px;
      color: #999999;
    }
  }
}
.box-wrapper {
  column-count: 2;
  column-gap: 1em;
  text-align: center;
  padding: 10px;
}
</style>