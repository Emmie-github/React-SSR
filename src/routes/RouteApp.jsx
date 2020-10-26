import React from "react";
import routes from "./routeConfig";
import { renderRoutes } from "react-router-config";

/**
 * 渲染路由配置
 */
export default function RouteApp() {
  return <div>{renderRoutes(routes)}</div>;
}
