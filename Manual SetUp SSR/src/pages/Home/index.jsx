import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../../store/actions/counter";

function Counter({ number, onIncrease, onDecrease }) {
  // 把仓库store数据传入进来,渲染到页面上
  return (
    <div>
      <h1>首页</h1>
      <p>
        <button onClick={onDecrease}>减</button>
        <strong>{number}</strong>
        <button onClick={onIncrease}>加</button>
      </p>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrease() {
      dispatch(increase());
    },
    onDecrease() {
      dispatch(decrease());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
