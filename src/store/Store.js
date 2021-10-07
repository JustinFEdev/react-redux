// const redux = require("redux");
// const reduxLogger = require("redux-logger");
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger();
// const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
// const ADD_VIEWCOUNT = "ADD_VIEWCOUNT";
// const combineReducers = redux.combineReducers;

//actions
// const addSubscriber = () => {
//   return {
//     type: ADD_SUBSCRIBER,
//   };
// };
// const addViewCount = () => {
//   return {
//     type: ADD_VIEWCOUNT,
//   };
// };
//action-types

//reducers
// const subscriberState = { subscribers: 365 };
// const subscriberReducer = (state = subscriberState, action) => {
//   switch (action.type) {
//     case ADD_SUBSCRIBER:
//       return {
//         ...state,
//         subscribers: state.subscribers + 1,
//       };
//     default:
//       return state;
//   }
// };

// const viewState = {
//   viewCount: 100,
// };
// const viewReducer = (state = viewState, action) => {
//   switch (action.type) {
//     case ADD_VIEWCOUNT:
//       return {
//         ...state,
//         viewCount: state.viewCount + 1,
//       };
//     default:
//       return state;
//   }
// };

// const rootRedicer = combineReducers({
//   view: viewReducer,
//   subscribers: subscriberReducer,
// });

//store
// const store = createStore(rootRedicer, applyMiddleware(logger));

//subscribe - view- dispatch
// store.subscribe(() => {
//   console.log("subscribe ==>>", store.getState());
// });
// store.dispatch(addSubscriber());
// store.dispatch(addSubscriber());
// store.dispatch(addSubscriber());

// store.dispatch(addViewCount());
// store.dispatch(addViewCount());
// console.log(store.getState());
