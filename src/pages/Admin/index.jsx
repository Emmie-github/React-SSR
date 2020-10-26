import React from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

/**
 * 后台页面Admin 
 */
export default function Admin({route}) {
  return (
    <div>
      <h1>后台页面</h1>
      <nav>
        <Link to="/admin/user" style={{ textDecoration: "none" }}>
          用户管理
        </Link>
        <Link
          to="/admin/system"
          style={{ marginLeft: 100, textDecoration: "none" }}
        >
          系统管理</Link>
      </nav>
      {/* 这里进行切换 */}
      {renderRoutes(route.routes)}
    </div>
  );
}
