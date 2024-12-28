<template>
  <div>
    <!-- form表单 -->
    <el-form label-width="80px" ref="passwordForm">
      <el-form-item label="当前密码" prop="currentPassword">
        <el-input
          type="password"
          v-model="form.currentPassword"
          placeholder="请输入当前密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input
          type="password"
          v-model="form.newPassword"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmPassword">
        <el-input
          type="password"
          v-model="form.confirmPassword"
          placeholder="请确认新密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="changePassword" round
          >修改密码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    changePassword() {
      // 表单验证
      if (
        !this.form.currentPassword ||
        !this.form.newPassword ||
        !this.form.confirmPassword
      ) {
        this.$message.error("请填写所有字段");
        return;
      }

      if (this.form.newPassword !== this.form.confirmPassword) {
        this.$message.error("新密码与确认密码不匹配");
        return;
      }

      // 发送请求修改密码
      this.$http({
        path: "users/update/pwd",
        method: "post",
        params: {
          username: window.localStorage.getItem("username") || "",
          pwd: this.form.newPassword,
        },
      }).then((res) => {
        this.$message({
          duration: 2000,
          offset: 300,
          message: res.msg,
          type: res.code === 200 ? "success" : "error",
        });

        // 清空表单
        if (res.code === 200) {
          this.form.currentPassword = "";
          this.form.newPassword = "";
          this.form.confirmPassword = "";
        }
      });
    },
  },
};
</script>

<style scoped>
/* 添加您的样式 */
</style>
