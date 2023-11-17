import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducers";

const reducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

// import { composeWithDevTools } from "redux-devtools-extension";

// import { applyMiddleware, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import authReducer from "./reducers/authReducers";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// could you updated for me

// const store = configureStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
