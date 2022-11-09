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

  // Получаем карты с бека
  React.useEffect(() => {
    dispatch(action.getCards());
  }, [dispatch]);

  // двоим карты
  const showCards = () => {
    const shuffledCards = [...state, ...state]
      .map((card) => ({ ...card, id: Math.random() * 99 }))
      .sort(() => Math.random - 0.5);
    setCards(shuffledCards);
  };

  React.useEffect(() => {
    state.length > 0 ? showCards() : null;
  }, [state]);

  const handleChoice = (card) => {
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
        setScore((prev) => prev + 5);
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  React.useEffect(() => {
    if (score === 40) {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ gameName: "memorygame", score: score * 1 }),
      });
    }
    console.log(score);
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
              {score !== 40 ? (
                <>
                  {" "}
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
