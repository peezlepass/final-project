import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { Spinner } from "../../Spinner/Spinner";
import styles from "./StartGame.module.css";

export const Game = () => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("step", step, "questions.length", questions.length);
    if (step === questions.length - 1) {
      console.log("won");
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ gameName: "quiz", score: 100 }),
      });
    }
  }, [step]);

  function userAnswer(e, id) {
    const userChoice = e.target.textContent;
    if (userChoice === questions[step].current) {
      console.log("Верно");
      dispatch(action.changeStatus(id, true));
    } else {
      console.log("Неверно");
      dispatch(action.changeStatus(id, false));
    }
    dispatch(action.nextQuestion());
  }

  return (
    <>
      {questions.length > 0 ? (
        <div
          style={{
            backgroundImage: `url(${questions[step].img})`,
          }}
          className={styles.startGame}
        >
          <h2 className={styles.title}>{questions[step].question}</h2>
          <div className={styles.variables}>
            <div onClick={(e) => userAnswer(e, questions[step].id)}>
              {questions[step].var1}
            </div>
            <div onClick={(e) => userAnswer(e, questions[step].id)}>
              {questions[step].var2}
            </div>
            <div onClick={(e) => userAnswer(e, questions[step].id)}>
              {questions[step].var3}
            </div>
            <div onClick={(e) => userAnswer(e, questions[step].id)}>
              {questions[step].var4}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
