import * as type from "./types";

const initialState = {
  allQuestions: [],
  oneQuestion: [],
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_QUESTIONS:
      return { ...state, allQuestions: action.payload };
    case type.NEW_LIST_QUESTIONS:
      return { ...state, oneQuestion: action.payload };
    case type.ADD_QUESTIONS:
      return { ...state, oneQuestion: [...state, action.payload] };
    default:
      return state;
  }
}

export default quizReducer;
