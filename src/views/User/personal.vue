<!--
 * @Descripttion: 
 * @version: 
 * @Author: CoderHD
 * @Date: 2021-10-26 21:32:54
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-29 00:09:00
-->
<template>
  <div>
    <!-- form表单 -->
    <el-form label-width="80px">
      <el-form-item label="头像">
        <div class="avatar-div">
          <!-- 上传组件 -->
          <img v-show="form.avatar" :src="form.avatar" class="small-img" />
          <el-upload
            v-if="!form.avatar"
            class="upload-demo"
            action="http://localhost:3000/upload/img"
            name="myfile"
            :headers="uploadHeader"
            :on-success="onSuccess"
            :show-file-list="false"
            multiple
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="username" disabled placeholder="用户名"> </el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.gender" label="男"></el-radio>
        <el-radio v-model="form.gender" label="女"></el-radio>
        <el-radio v-model="form.gender" label="保密"></el-radio>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input
          type="textarea"
          v-model="form.description"
          rows="3"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" placeholder="手机号"> </el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="form.email" placeholder="电子邮箱"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="saveForm" round
          >更新个人信息</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadHeader: {
        authorization: "Bearer " + window.localStorage.token,
      },
      username: window.localStorage.getItem("username"),
      form: {
        _id: window.localStorage.getItem("_id"),
        // username:'',
        gender: "男",
        avatar: "",
        description: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {
    this.form = this.$store.state.user;
  },
  methods: {
    onSuccess(res) {
      //给对象添加方法(在vue3中才会重新渲染)
      this.form.avatar = res.path;
    },
    saveForm() {
      //给对象添加属性（没有下列这句，接口查不到）
      this.form._id = window.localStorage.getItem("_id");
      this.$http({
        path: "users/update/personal",
        method: "post",
        params: this.form,
      }).then((res) => {
        this.$message({
          duration: 2000,
          offset: 300,
          message: res.data.msg,
          type: res.data.code === 200 ? "success" : "error",
        });
      });
    },
  },
};
</script>

<style scoped>
.small-img {
  width: 120px;
  height: 120px;
  margin-right: 20px;
  border-radius: 50%;
}
.avatar-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form-item {
  text-align: center;
  margin-left: 40px;
}
</style>
