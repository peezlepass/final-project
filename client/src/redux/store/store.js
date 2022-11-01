import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducer from "../reducers/quizReducer/quizReducer";
import userReducer from "../reducers/userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
