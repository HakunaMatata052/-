<template>
  <div class="container">
    <navBar />
    <div class="main">
      <div class="address box" @click="show= true">
        <van-icon name="location" class="ico" />
        <div class="info">
          <div class="name">
            <h3>
              张三
              <small>1982695665</small>
            </h3>
            <p>陕西省西安市雁塔区陕西省西安市雁塔区陕西省西安市雁塔区陕西省西安市雁塔区</p>
          </div>
        </div>
        <van-icon name="arrow" class="more" />
      </div>
      <div class="box">
        <div class="goods-info">
          <div class="img">
            <img src="https://picsum.photos/345/250" />
          </div>
          <div class="info">
            <h3>¥928.00</h3>
            <p>剩余库存：928件</p>
            <div class="title">海螺贝壳饰品工艺品面包螺水族箱鱼缸造景海星</div>
          </div>
        </div>

        <div class="order-info">
          <van-cell-group>
            <van-cell title="购买数量">
              <van-stepper v-model="value" />
            </van-cell>
            <van-cell title="配送方式" value="包邮" in-link />
          </van-cell-group>
        </div>

        
      </div>

      <van-popup v-model="show" position="bottom">
        <van-nav-bar
          left-arrow
          @click-left="onClickLeft"
        />
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          disabled-text="以下地址超出配送范围"
          @add="onAdd"
          @edit="onEdit"
        />
      </van-popup>
    </div>
    <van-submit-bar
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
/>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "buy",
  components: {
    navBar
  },
  data() {
    return {
      show: false,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onClickLeft(){
        this.show = false
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  padding: 15px;
}
.box {
  padding: 18px 25px;
  background-color: #f7f7f7;
  border-radius: 25px;
  margin-bottom: 15px;
}
.address {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ico {
    font-size: 20px;
    background-image: linear-gradient(23deg, #ff346c 0%, #ff8b66 100%),
      linear-gradient(#f0f0f0, #f0f0f0);
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 10px;
  }
  .info {
    flex-grow: 1;
    h3 {
      font-size: 15px;
      small {
        font-size: 13px;
        color: #999;
      }
    }
    p {
      font-size: 13px;
    }
  }
  .more {
    color: #999;
    flex-shrink: 0;
  }
}
.goods-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img {
    width: 87px;
    height: 87px;
    background-color: #f1f1f1;
    border-radius: 25px;
    overflow: hidden;
    margin: 20px 0;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
        object-fit: cover;
    }
  }

  .info {
    padding: 10px;
    flex-grow: 1;
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
}
</style>