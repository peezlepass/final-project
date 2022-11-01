import * as type from "./types";

const initialState = {
  step: 0,
  allQuestions: [],
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_QUESTIONS:
      return { ...state, allQuestions: action.payload };
    case type.NEXT_QUESTION:
      return { ...state, step: state.step + 1 };
    case type.RESTART_GAME:
      return { ...state, step: 0 };
    case type.CHANGE_STATUS:
      return {
        ...state,
        oneQuestion: state.map((el) =>
          el.id === action.payload.id
            ? { ...el, status: action.payload.status }
            : el
        ),
      };
    default:
      return state;
  }
}

export default quizReducer;
