import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../redux/reducers/quizReducer/actions";
import { Spinner } from "../../Spinner/Spinner";
import styles from "./StartGame.module.css";

export const Game = ({ current, setCurrent }) => {
  const questions = useSelector((state) => state.quiz.allQuestions);
  const step = useSelector((state) => state.quiz.step);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (step === questions.length - 1) {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ gameName: "quiz", score: current * 1 }),
      });
    }
  }, [step]);

  function userAnswer(e, id) {
    const userChoice = e.target.textContent;
    if (userChoice === questions[step].current) {
      setCurrent((prev) => prev + 1);
      dispatch(action.changeStatus(id, true));
    } else {
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
          <h2 className={styles.title}>
            {questions[step].question}
            <div className={styles.scorelength}>
              <div>
                Вопрос {step + 1} из {questions.length}
              </div>
              <div>Верных ответов: {current}</div>
            </div>
          </h2>
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
