import React from "react";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MemoryBoard.module.css";
import * as action from "../../../redux/reducers/memoryReducer/action";

export const MemoryBoard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.memory);
  const navigate = useNavigate();
  // стейты для игры
  const [cards, setCards] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [choiceOne, setchoiceOne] = React.useState(null);
  const [choiceTwo, setchoiceTwo] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [showTimer, setshowTimer] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  // Получаем карты с бека
  React.useEffect(() => {
    dispatch(action.getCards());
  }, [dispatch]);

  // рандомим карты
  React.useEffect(() => {
    state.length > 0
      ? setCards([...state].sort(() => Math.random() - 0.5))
      : null;
  }, [state]);

  const handleChoice = (card) => {
    setshowTimer(true);
    choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
  };

  React.useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((el) =>
            el.src === choiceOne.src ? { ...el, matched: true } : el
          );
        });
        setScore((prev) => prev + 100);
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  React.useEffect(() => {
    if (showTimer) {
      const time = setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [showTimer, timer]);

  React.useEffect(() => {
    if (score === 800) {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          gameName: "memorygame",
          score: Math.floor((score / timer) * 5),
        }),
      });
    }
  }, [score]);

  const resetTurn = () => {
    setchoiceOne(null);
    setchoiceTwo(null);
    setDisabled(false);
  };

  const restartGame = () => {
    setchoiceOne(null);
    setchoiceTwo(null);
    setDisabled(false);
    setScore(0);
    navigate("/");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.mainBoard}>
        <div className={styles.board}>
          {cards.length > 0 ? (
            <>
              {score !== 800 ? (
                <>
                  <div className={styles.score}>Вы набрали {score} очков</div>
                  <div className={styles.card_grid}>
                    {cards.map((card) => (
                      <Card
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={
                          card === choiceOne ||
                          card === choiceTwo ||
                          card.matched
                        }
                        disabled={disabled}
                      />
                    ))}
                  </div>
                  {showTimer ? (
                    <div className={styles.timer}>Прошло: {timer} секунд</div>
                  ) : null}
                </>
              ) : (
                <button onClick={restartGame} className={styles.btn}>
                  На гланввную
                </button>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
