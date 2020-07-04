import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import { moviesReducer } from "./reducers/moviesReducer";

export const store = createStore(
  combineReducers({ movies: moviesReducer }),
  {},
  applyMiddleware(createLogger(), promise)
);
