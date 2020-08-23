import {combineReducers} from "redux";
import filter from "./filter";
import table from "./table";
import sort from "./sort";

const filterTableRootReducers = combineReducers({
  filter,
  table,
  sort
});

export default filterTableRootReducers;
