import { combineReducers } from "redux";

import subscriberReducer from "./subscribers/reducer";
import viewReducer from "./view/reducer";

const rootReducer = combineReducers({
  views: viewReducer,
  subscribers: subscriberReducer,
});
export default rootReducer;
