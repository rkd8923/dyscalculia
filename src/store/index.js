import { combineReducers } from "redux";
import practice from "./practice";
import test from "./test";
const rootReducer = combineReducers({
  test,
  practice,
});

export default rootReducer;
