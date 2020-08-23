import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { cloneDeep } from 'lodash';
import defaultStates from "./states/default-states";
import rootReducers from "./reducers/root-reducers";
import filterTableDefaultState from "../app/filter-table/redux/states/root-states";

import { createLogger } from 'redux-logger'
import filterTableRootReducers from "../app/filter-table/redux/reducers/root-reducers";
const loggerMiddleware = createLogger();

const combinedState = {
  table: cloneDeep(filterTableDefaultState)
};

const combinedReducers = combineReducers({
  table: filterTableRootReducers
});

export default function configureStore() {
  return createStore(
    combinedReducers,
    combinedState,
    process.env.REACT_APP_DEBUG === 'true' ? applyMiddleware(thunkMiddleware, loggerMiddleware) : applyMiddleware(thunkMiddleware),
  )
}
