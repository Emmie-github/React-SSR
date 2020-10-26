import React from "react";
import Header from "@/components/Header";
import { renderRoutes } from "react-router-config";

/**
 * 前台页面
 * @param {*} param0
 */
// export default function Front(props) {
export default function Front({ route }) {
  // console.log(props.route.routes);
  // console.log(route.routes);
  return (
    <div>
      {/* 导航条 */}
      <Header />
      <div style={{ padding: 50 }}>
        {/* 这一部分切换-显示组件 */}
        {/* {renderRoutes(props.route.routes)} */}
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}
