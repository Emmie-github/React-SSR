import counter from "./counter";
import movies from "./movies";
import { combineReducers } from "redux";

/**合并reducer */
export default combineReducers({
  counter,
  movies,
});
