import * as type from "./types";

export function getQuestions(questions) {
  return {
    type: type.GET_QUESTIONS,
    payload: questions,
  };
}

export function newListQuestions(question) {
  return {
    type: type.NEW_LIST_QUESTIONS,
    payload: question,
  };
}

export function addQuestion(question) {
  return {
    type: type.addQuestion,
    payload: question,
  };
}
