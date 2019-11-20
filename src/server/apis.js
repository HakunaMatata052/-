import Axios from "./axios";

class Api extends Axios {
  /**
   * 获取商品数据
   * @param {Object} params typeid
   */
  async information(params = {}) {
    return await this.axios("POST", "user/information", params);
  }  
}

export default new Api();