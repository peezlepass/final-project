import { combineReducers, configureStore } from "@reduxjs/toolkit";
import achivReducer from "../reducers/achivReducer/achivReducer";
import memoryReducer from "../reducers/memoryReducer/memoryReducer";
import modalReducer from "../reducers/modalReducer/modalReducer";
import quizReducer from "../reducers/quizReducer/quizReducer";
import userReducer from "../reducers/userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  achiv: achivReducer,
  quiz: quizReducer,
  memory: memoryReducer,
});

const store = configureStore({
  reducer: rootReducer
})

export default store;