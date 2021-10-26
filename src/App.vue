<!--
 * @Descripttion: 
 * @version: 
 * @Author: CoderHD
 * @Date: 2021-10-26 13:36:29
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-26 22:37:32
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    // 	this.$axios.get('https://cnodejs.org/api/v1/topics').then(res=>{
    // 		console.log(res.data.data);
    // 	}).catch(err=>{
    // 		console.error('请求异常',err)
    // 	})
    this.$http({
      path: "https://cnodejs.org/api/v1/topics",
      method: "get",
      params: {},
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
