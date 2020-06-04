import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";
import { SET_USER_LOGIN_SUCCESS } from "../actions/user";

const middleware = [thunk];

const logger = createLogger();

const initialState = {};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware, logger))
);

const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: SET_USER_LOGIN_SUCCESS });
}
export default store;
