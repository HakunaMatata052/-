<template>
  <div class="container">
    <navBar />
    <div class="main">
      <div class="img">
        <img src="https://picsum.photos/345" />
      </div>
      <div class="info">
        <h3>¥928.00</h3>
        <p>剩余库存：928件</p>
        <div class="title">海螺贝壳饰品工艺品面包螺水族箱鱼缸造景海星</div>
      </div>
      <div class="stepper">
        <label for>买入件数</label>
        <div class="input">
          <div class="reduce" @click="compute('reduce')">
            <svg-icon icon-class="reduce" />
          </div>
          <input type="text" v-model="form.num" />
          <div class="plus" @click="compute('plus')">
            <svg-icon icon-class="plus" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-btn" @click="$router.push('/buy/'+$route.params.id)">
      <svg-icon icon-class="buy" />
      <p>共计：¥928.00</p>
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "goodsDetails",
  components: {
    navBar
  },
  computed: {
    num2() {
      return this.form.num;
    }
  },
  watch: {
    num2(val, oldval) {
      if (val <= 0) {
        this.form.num = oldval;
      }
    }
  },
  data() {
    return {
      form: {
        num: 1
      }
    };
  },
  methods: {
    compute(type) {
      if (type == "reduce") {
        if (this.form.num <= 1) {
          return;
        }
        this.form.num--;
      } else if (type == "plus") {
        this.form.num++;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  padding: 0 15px;
}
.img {
  width: 345px;
  background-color: #f1f1f1;
  border-radius: 25px;
  overflow: hidden;
  margin: 20px 0;
  img {
    width: 100%;
    height: 100%;
        object-fit: cover;
  }
}

.info {
  padding: 10px;
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
  .title {
    font-size: 13px;
    color: #333333;
    padding: 10px 0;
  }
}
.stepper {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  label {
    font-size: 13px;

    color: #333333;
    margin-right: 10px;
  }
  .input {
    display: flex;
    align-items: stretch;
    height: 45px;
    line-height: 45px;
    .reduce,
    .plus {
      border: 1px solid #ebebeb;
      width: 50px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .reduce {
      border-radius: 40px 0 0 40px;
    }
    .plus {
      border-radius: 0 40px 40px 0;
    }
    input {
      text-align: center;
      width: 74px;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
    }
  }
}
.bottom-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 345px;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(27, 4, 3, 0.16);
  border-radius: 30px;
  margin: 20px auto;
  padding: 0 40px;
  box-sizing: border-box;
  p {
    font-size: 17px;
    color: #333333;
  }
  span {
    font-size: 17px;
    color: #ff6169;
  }
}
</style>