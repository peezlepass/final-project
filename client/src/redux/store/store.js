import { combineReducers, configureStore } from "@reduxjs/toolkit";
import memoryReducer from "../reducers/memoryReducer/memoryReducer";
import quizReducer from "../reducers/quizReducer/quizReducer";
import userReducer from "../reducers/userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
  memory: memoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
