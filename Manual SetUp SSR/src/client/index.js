import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//测试client获取数据
// import { getMovies } from "../services/movieService";
// getMovies().then((resp) => {
//   console.log(resp);
// });

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.hydrate(<App />, document.getElementById("root"));
// hydrate不会再渲染真实的dom
