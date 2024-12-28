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
    // this.$http({
    //   path: "users/login",
    //   method: "post",
    //   params: {},
    // }).then((res) => {
    //   console.log(res.data);
    // });
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
