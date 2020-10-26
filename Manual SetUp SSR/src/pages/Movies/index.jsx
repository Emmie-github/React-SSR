import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movies";

// export default function index() {
//   return (
//     <div>
//       <h1>电影列表</h1>
//     </div>
//   );
// }
/**
 *
 * @param {*} param0  movies电影数组、loadMovies加载电影函数
 */
//函数组件用HOOK,类组件用生命周期函数componentDidMount
//类组件:componentWillMount服务端运行、componentDidMount服务端不运行

function Page({ movies = [], loadMovies }) {
  console.log("render!!");
  useEffect(() => {
    console.log("effect!!!");
    // 服务端不运行这里、 从仓库获取数据到client
    //如果服务端加载了数据,则啥都不做;如果服务未加载数据,则加载数据
    if (window.requestPath === "/movies") {
      //不需要加载数据
      console.log("不需要加载数据");
      return;
    } else {
      console.log("加载数据");
      loadMovies && loadMovies();
    }
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div>
      <h1>电影列表</h1>
      <ul>
        {movies.map((m) => (
          <li key={m._id}>{m.name}</li>
        ))}
      </ul>
    </div>
  );
}
/**在组件服务端渲染之前需要运行的函数
 * 加载数据到仓库-静态方法
 * @param {*} store
 */
Page.loadData = async function (store) {
  await store.dispatch(fetchMovies());
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadMovies() {
      dispatch(fetchMovies());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
