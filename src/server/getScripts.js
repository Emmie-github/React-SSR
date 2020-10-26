import fs from "fs";
export default function () {
  const result = fs
    .readdirSync("./public/js")
    .filter((file) => file.endsWith(".js"))
    .map((file) => `<script src="/js/${file}"></script>`);
  return result.join("\n");
}

// const fs = require("fs");
// const result = fs
//   .readdirSync("./public/js")
//   .filter((file) => file.endsWith(".js"))
//   .map((file) => `<script src="./js/${file}></script>`);
// console.log(result);