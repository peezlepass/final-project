import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { EndGame } from "../EndGame/EndGame";
import { Game } from "../Game/Game";

export const Board = () => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getQuestions());
  }, [dispatch]);

  return <>{questions.length !== step ? <Game /> : <EndGame />}</>;
};
