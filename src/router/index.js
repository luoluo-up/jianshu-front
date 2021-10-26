/*
 * @Descripttion:
 * @version:
 * @Author: CoderHD
 * @Date: 2021-10-26 13:36:29
 * @LastEditors: CoderHD
 * @LastEditTime: 2021-10-27 00:17:05
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "web",
    component: () => import("@/views/Web"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "/admin/users/personal",
        name: "UserPersonal",
        component: () => import("@/views/User/personal.vue"),
        meta: {
          title: "个人资料",
        },
      },
      {
        path: "/admin/users/password",
        name: "UserPassword",
        component: () => import("@/views/User/password.vue"),
        meta: {
          title: "修改密码",
        },
      },
      {
        path: "/admin/article",
        name: "AdminArticle",
        component: () => import("@/views/Article"),
        meta: {
          title: "文章列表",
        },
      },
      {
        path: "/admin/article/add",
        name: "AddArticle",
        component: () => import("@/views/Article/add.vue"),
        meta: {
          title: "发布文章",
        },
      },
      {
        path: "/admin/article/update",
        name: "UpdateArticle",
        component: () => import("@/views/Article/update.vue"),
        meta: {
          title: "更新文章",
        },
      },
      {
        path: "/admin/fans",
        name: "AdminFans",
        component: () => import("@/views/Fans"),
        meta: {
          title: "粉丝管理",
        },
      },
      {
        path: "/admin/comment",
        name: "AdminComment",
        component: () => import("@/views/Comment"),
        meta: {
          title: "评论管理",
        },
      },
      {
        path: "/admin/star",
        name: "AdminStar",
        component: () => import("@/views/Star"),
        meta: {
          title: "点赞管理",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
