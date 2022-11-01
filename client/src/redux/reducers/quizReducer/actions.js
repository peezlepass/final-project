import * as type from "./types";

export function getQuestions(questions) {
  return {
    type: type.GET_QUESTIONS,
    payload: questions,
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
