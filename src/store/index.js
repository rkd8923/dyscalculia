import { combineReducers } from "redux";
import counter from "./counter";
import exam from "./exam";

const rootReducer = combineReducers({
  counter,
  exam,
});

export default rootReducer;
