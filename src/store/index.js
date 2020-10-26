import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
// import { fetchMovies } from "./actions/movies";

/**创建仓库 */
function makeStore() {
  let store;
  if (global.document) {
    // 客户端 typeof winddow!=="undefined"
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(
      reducer,
      window.pageDatas,
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      composeEnhancers(applyMiddleware(thunk))
    );
  } else {
    //服务端
    store = createStore(reducer, applyMiddleware(thunk));
  }
  return store;
}

// 测试数据
// if (typeof window !== "undefined") {
//   window.store = store;
//   window.fetchMovies = fetchMovies;
// }

export default makeStore;
