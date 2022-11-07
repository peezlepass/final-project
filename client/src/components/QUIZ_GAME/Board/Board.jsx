import React from "react";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EndGame } from "../EndGame/EndGame";
import { Game } from "../Game/Game";
import styles from "./Board.module.css";

export const Board = () => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getQuestions());
  }, [dispatch]);

  const exitGame = () => {
    dispatch(action.restartGame());
    navigate("/");
  };

  return <>{questions.length !== step ? <Game /> : <EndGame />}</>;
};
