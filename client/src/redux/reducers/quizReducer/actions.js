import * as type from "./types";

export function getQuestions() {
  return (dispatch) => {
    fetch("/quiz")
      .then((res) => res.json())
      .then((json) => dispatch({ type: type.GET_QUESTIONS, payload: json }));
  };
}

export function changeStatus(id, status) {
  return {
    type: type.CHANGE_STATUS,
    payload: {
      id,
      status,
    },
  };
}

export function nextQuestion() {
  return {
    type: type.NEXT_QUESTION,
  };
}

export function restartGame() {
  return {
    type: type.RESTART_GAME,
  };
}
