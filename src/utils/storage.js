/**
 * Storage二次封装
 */

import config from "../config";

export default {
  setItem(key, val) {
    let storage = this.getStorage();
    storage[key] = val;
    // 存储的时候将对象转换成字符串的形式
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  getItem(key) {
    this.getStorage()[key];
  },
  getStorage() {
    // 将字符串转换成JSON对象的形式
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
  },
  clearItem(key) {
    let storage = this.getStorage();
    delete storage[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
