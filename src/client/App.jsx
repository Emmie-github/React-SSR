import React from "react";
// import Home from "@/pages/Home";
import "../assets/global.css";
import { BrowserRouter } from "react-router-dom";
import RouteApp from "@/routes/RouteApp";
import { Provider } from "react-redux";
// import store from "../store";
import makeStore from "../store";

// 创建仓库
const store = makeStore();
export default () => {
  // return <Home />;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>
  );
};
