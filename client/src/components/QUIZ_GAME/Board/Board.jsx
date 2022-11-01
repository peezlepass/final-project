import React from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "../mock.json";
import styles from "./Board.module.css";
import * as action from "../../../redux/reducers/quizReducer/actions";

export const Board = () => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getQuestions(data));
  }, [dispatch]);

  function userAnswer(e) {
    dispatch(action.nextQuestion());
    const userChoice = e.target.textContent;
    if (userChoice === questions[step].current) {
      console.log("Верно");
    } else {
      console.log("Неверно");
    }
  }

  return (
    <>
      <div className={styles.startGame}>
        {questions.length > 0 ? (
          <>
            <h2>{questions[step].question}</h2>
            <div className={styles.variables}>
              <div onClick={userAnswer}>{questions[step].var1}</div>
              <div onClick={userAnswer}>{questions[step].var2}</div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
