import { applyMiddleware, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as todosReducer } from "./Todos/reducer";
import {reducer as authReducer} from './Authentication/reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer,
  todosReducer,
  authReducer
});


export const store = legacy_createStore(rootReducer);