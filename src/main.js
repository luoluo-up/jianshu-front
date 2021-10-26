/*
 * @Descripttion:
 * @version:
 * @Author: CoderHD
 * @Date: 2021-10-26 13:36:29
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-26 22:57:12
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import axios from 'axios'
import http from "./http";

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios
Vue.prototype.$http = http;

Vue.use(Elementui);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
