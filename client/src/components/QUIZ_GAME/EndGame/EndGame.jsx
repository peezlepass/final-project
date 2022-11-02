import React from "react";
import styles from "./EndGame.module.css";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { useDispatch } from "react-redux";

export const EndGame = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.endGame}>
        <div className={styles.title}>Конец игры</div>
        <button
          className={styles.btn}
          onClick={() => dispatch(action.restartGame())}
        >
          restart
        </button>
      </div>
    </>
  );
};
