/*
 * @Descripttion:
 * @version:
 * @Author: CoderHD
 * @Date: 2021-10-26 13:36:29
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-28 16:27:24
 */
import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUsername(state, user) {
      state.user = user;
    },
  },
  plugins: [persistedstate()],
  actions: {},
  modules: {},
});
