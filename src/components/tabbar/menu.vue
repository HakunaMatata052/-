<template>
  <VueDragResize
    :isResizable="false"
    :parentLimitation="true"
    :snapToGrid="true"
    :preventActiveBehavior="true"
    :isActive="isActive"
    :w="70"
    :h="70"
    :x="pageX"
    :y="pageY"
    :z="999999"
  >
    <div :class="active?'navbar active':'navbar'" @touchstart="start" @touchend="end">
      <van-icon name="weapp-nav" />
      <ul class="menu">
        <li>
          <van-icon name="wap-home-o" class="ico" @touchend.stop="go('/')" />
        </li>
        <li>
          <van-icon name="service-o" class="ico" />
        </li>
        <li>
          <van-icon name="search" class="ico" />
        </li>
      </ul>
    </div>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
export default {
  name: "menu",
  components: {
    VueDragResize
  },
  data() {
    return {
      active: false,
      isActive: true,
      pageX: document.body.clientWidth - 15 - 70,
      pageY: document.body.clientHeight - 55 - 70,
      x: 0,
      y: 0
    };
  },
  methods: {
    start(e) {
      this.x = e.touches[0].clientX;
      this.y = e.touches[0].clientY;
    },
    end(e) {
      if (
        e.changedTouches[0].clientX == this.x &&
        e.changedTouches[0].clientY == this.y
      ) {
        this.active = !this.active;
      }
    },
    go(url) {
      this.active = false;
      this.$router.push(url);
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  z-index: 9999;
  text-align: center;
  font-size: 1.75em;
  font-weight: bold;
  color: #000;
  transition: 0.24s 0.2s;
  box-shadow: 0px 0px 40px 0px rgba(92, 6, 20, 0.3);
}
.navbar .menu {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: -105px;
  left: -105px;
  border: 150px solid transparent;
  cursor: default;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 1.4s 0.07s;
  z-index: -1;
}
.navbar.active .menu {
  transition: transform 0.4s 0.08s, z-index 0s 0.5s;
  transform: scale(1);
  z-index: 1;
}
.navbar .menu li {
  position: absolute;
  top: -100px;
  left: -100px;
  transform-origin: 100px 100px;
  transition: all 0.5s 0.1s;
}
.navbar.active .menu li {
  transition: all 0.6s;
}
.navbar .menu li .ico {
  transition: all 0.4s ease 0s;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  font-size: 80%;
  color: #000;
  transition: 0.6s;
  text-decoration: none;
  box-shadow: 0px 0px 40px 0px rgba(92, 6, 20, 0.3);
}
.navbar.active .menu li:nth-child(3) {
  transition-delay: 0.14s;
  transform: rotate(325deg);
}
.navbar.active .menu li:nth-child(3) .ico {
  transition-delay: 0.28s;
  transform: rotate(395deg);
}
.navbar.active .menu li:nth-child(2) {
  transition-delay: 0.16s;
  transform: rotate(365deg);
}
.navbar.active .menu li:nth-child(2) .ico {
  transition-delay: 0.32s;
  transform: rotate(355deg);
}
.navbar.active .menu li:nth-child(1) {
  transition-delay: 0.18s;
  transform: rotate(405deg);
}
.navbar.active .menu li:nth-child(1) .ico {
  transition-delay: 0.36s;
  transform: rotate(315deg);
}
</style>