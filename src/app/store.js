import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./ducks";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

export default createStore(
  rootReducer,
  initialState,
  window.window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(...middleware))
);
