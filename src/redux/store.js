import { applyMiddleware, createStore } from "redux";
import rootRedicer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger, thunk];

const store = createStore(
  rootRedicer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
