import React from "react";
import App from "./App";
import ReactDom from "react-dom/server";
import getHtml from "./getHtml";
import loadData from "./loadData";
import makeStore from "../store";

export default async (req, res) => {
  const store = makeStore();
  const context = {};
  //加载数据到仓库
  //调用对应组件的loadData
  // console.log(req.path);
  await loadData(req.path, store);
  // 渲染组件
  const componentHTML = ReactDom.renderToString(
    <App location={req.path} context={context} store={store} />
  );
  const html = getHtml(componentHTML, req.path, store);
  console.log(context);
  //重定向
  if (context.url) {
    res.redirect(301, context.url);
    return;
  }
  // 404
  if (context.resCode) {
    res.status(context.resCode);
  }
  res.send(html);
};
