import { matchRoutes } from "react-router-config";
import routeConfig from "../routes/routeConfig";
// import store from "../store";
/**
 *负责服务端渲染前的加载
 */
export default function (pathname, store) {
  const matches = matchRoutes(routeConfig, pathname);
  //   console.log(matches);
  const proms = [];
  for (const match of matches) {
    // console.log(match.route);
    if (match.route.component.loadData) {
      proms.push(Promise.resolve(match.route.component.loadData(store)));
    }
  }
  return Promise.all(proms);
}
