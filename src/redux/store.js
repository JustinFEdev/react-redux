import { createStore } from "redux";
import rootRedicer from "./rootReducer";

const store = createStore(rootRedicer);

export default store;
