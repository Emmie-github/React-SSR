import Home from "@/pages/Home";
import Movies from "@/pages/Movies";
import NotFound from "@/pages/NotFound";
import Front from "@/pages/Front";
import Admin from "@/pages/Admin";
import AdminHome from "@/pages/Admin/Home";
import AdminSystemManage from "@/pages/Admin/SystemManage";
import AdminUserManage from "@/pages/Admin/UserManage";
import AdminNotFound from "@/pages/Admin/NotFound";
import { Redirect } from "react-router-dom";
import React from 'react';

export default [
  // 后台页面
  {
    key: "admin",
    path: "/admin",
    component: Admin,
    routes: [
      {
        key: "home",
        path: "/admin",
        exact: true,
        component: AdminHome,
      },
      {
        key: "system",
        path: "/admin/system",
        exact: true,
        component: AdminSystemManage,
      },
      {
        key: "user",
        path: "/admin/user",
        exact: true,
        component: AdminUserManage,
      },
      {
        key: "notFound",
        component: AdminNotFound,
      },
    ],
  },
  // 前台页面
  {
    key: "front",
    path: "/",
    component: Front,
    routes: [
      {
        key: "home",
        path: "/",
        exact: true,
        component: Home,
      },
      {
        key: "temp",
        path: "/temp",
        exact: true,
        component: () => {
          return <Redirect to="/movies" />;
        },
      },
      {
        key: "movies",
        path: "/movies",
        exact: true,
        component: Movies,
      },
      {
        key: "notfound",
        component: NotFound,
      },
    ],
  },
];
