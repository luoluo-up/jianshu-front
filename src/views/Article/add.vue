<!--
 * @Descripttion: 
 * @version: 
 * @Author: CoderHD
 * @Date: 2021-10-26 21:34:46
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-30 00:32:57
-->
<template>
  <div>
    <el-form label-width="100px">
      <el-form-item label="文章标题">
        <el-input
          v-model="form.title"
          clearable=""
          placeholder="请输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <div id="editor"></div>
      </el-form-item>
      <el-form-item label="文章来源">
        <el-radio v-model="form.stemfrom" label="原创">原创</el-radio>
        <el-radio v-model="form.stemfrom" label="转载">转载</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round @click="submit">发布文章</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from "wangeditor";
export default {
  data() {
    return {
      form: {
        title: "",
        stemfrom: "",
        author: this.$store.state.user.username,
      },
      editor: null,
    };
  },
  mounted() {
    //创建wangEditor示例
    this.editor = new Editor("#editor");
    this.editor.create();
  },
};
</script>

<style></style>
