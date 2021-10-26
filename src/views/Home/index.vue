<!--
 * @Descripttion: 
 * @version: 
 * @Author: CoderHD
 * @Date: 2021-10-26 21:29:58
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-27 01:52:25
-->
<template>
  <el-container>
    <el-header>
      <div class="sys-title">后台管理系统</div>
      <div class="header-right">
        <span>网站首页</span>
        <span>头像</span>
        <span>admin</span>
        <span>退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true" active-text-color="#ffd04b">
          <el-submenu index="/admin/users">
            <template slot="title">
              <span>个人中心</span>
            </template>
            <el-menu-item index="/admin/users/personal">个人资料</el-menu-item>
            <el-menu-item index="/admin/users/password">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="/admin/article">
            <template slot="title">
              <span>文章管理</span>
            </template>
            <el-menu-item index="/admin/article/add">发布文章</el-menu-item>
            <el-menu-item index="/admin/article">文章列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/comment">
            <template slot="title">
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/fans">
            <template slot="title">
              <span>粉丝管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/star">
            <template slot="title">
              <span>点赞管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  padding: 0 15px;
  height: 80px !important;
}
.el-header img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 15px 0px 15px 15px;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header div span {
  margin-left: 15px;
}
.el-aside {
  background-color: #333744;
}
.el-aside .el-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedf1;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2 em;
  cursor: pointer;
}
</style>
