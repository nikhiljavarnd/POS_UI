import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import persistState from "redux-localstorage";
import thunk from "redux-thunk";

import { loginReducer, registerReducer } from "./redux/reducers/authReducers";

const appReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("redux");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const middleware = [thunk];

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware), persistState())
);

export default store;
