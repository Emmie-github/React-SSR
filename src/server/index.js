import express from "express";
import render from "./render";
// import { getMovies } from "../services/movieService";
// const { createProxyMiddleware } = require("http-proxy-middleware");
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

app.use(express.static("./public"));
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://yuanjin.tech:5005/",
    changeOrigin: true,
  })
);
app.get("*", render);

// 测试server获取数据
// getMovies().then((resp) => {
//   console.log(resp);
// });
app.listen(8089, () => {
  console.log("server listen on 8089");
});
