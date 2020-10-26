import React, { useState } from "react";
import styles from "./index.css";
import pngUrl from "../../assets/chengge.png";

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}</h1>
      <img src={pngUrl} alt="" />
      <div className={styles.bg}></div>
      <button
        className={styles.beautybutton}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}

// import React from "react";
// export default function () {
//   return <h1>Home页面</h1>;
// }
