import React from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "../mock.json";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { EndGame } from "../EndGame/EndGame";
import { Game } from "../Game/Game";

export const Board = () => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("/quiz")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  React.useEffect(() => {
    dispatch(action.getQuestions(data));
  }, [dispatch]);

  return <>{questions.length !== step ? <Game /> : <EndGame />}</>;
};
