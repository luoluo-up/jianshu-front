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
        <el-button type="success" round @click="submit">更新文章</el-button>
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
        id: 0,
        _id: "",
        title: "",
        stemfrom: "",
        author: window.localStorage.getItem("username"),
        content: "",
      },
      editor: null,
    };
  },
  created() {
    let id = this.$route.query.id;
    //此处代码为异步请求，该代码中的then会在mounted中代码之后，但是该钩子函数已经失效了，所以
    this.$http({
      path: "/article/findOne",
      method: "get",
      params: {
        id,
      },
    }).then((res) => {
      console.log(res);
      this.form = res.data;
      // this.form.content=res.data.result.content
      console.log("created come out");
    });
  },
  watch: {
    form: {
      handler(val) {
        //初始化富文本编辑器内容
        this.editor.txt.html(val.content);
        console.log("mounted come out");
      },
      deep: true,
    },
  },
  mounted() {
    //创建wangEditor实例
    this.editor = new Editor("#editor");
    //配置上传图片的接口地址
    this.editor.config.uploadImgServer = `http://localhost:3000/upload/editor/img`;
    this.editor.config.uploadFileName = "editorFile";
    this.editor.config.uploadImgHeaders = {
      authorization: "Bearer " + localStorage.token,
    };
    //设置富文本编辑器高度
    // this.editor.config.hight = 600
    //设置提示文字
    this.editor.config.placeholder = "编辑文章内容";
    this.editor.create();
  },
  methods: {
    submit() {
      //获取富文本编辑器的内容
      let content = this.editor.txt.html();
      // console.log(content)
      this.$http({
        path: "/article/update",
        method: "post",
        params: {
          id: this.form.id,
          title: this.form.title,
          // createTime:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          stemfrom: this.form.stemfrom,
          content,
          // author:this.form.author,
        },
      }).then((res) => {
        this.$message({
          message: res.msg,
          type: res.code === 200 ? "success" : "error",
        });
        this.$router.push("/admin/article");
      });
    },
  },
};
</script>

<style></style>
