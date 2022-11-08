import React from "react";
import styles from "./EndGame.module.css";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const EndGame = ({ current, setCurrent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const endGame = () => {
    dispatch(action.restartGame());
    navigate("/");
  };
  return (
    <>
      <div className={styles.endGame}>
        <div className={styles.title}>Конец игры</div>
        <div className={styles.message}>
          Вы ответили правильно на {current}{" "}
          {current === 1
            ? "вопрос"
            : current === 2 || current === 3 || current === 4
            ? "вопроса"
            : "вопросов"}
          , вы молодец!
        </div>
        <button className={styles.btn} onClick={endGame}>
          На главную
        </button>
      </div>
    </>
  );
};
