import React from "react";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MemoryBoard.module.css";
import * as action from "../../../redux/reducers/memoryReducer/action";

export const MemoryBoard = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.memory);
  const cardsRandom = [...cards].sort(() => Math.random() - 0.5);

  const [card, setCard] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);

  const handleClick = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  React.useEffect(() => {
    dispatch(action.getCards());
  }, []);

  React.useEffect(() => {
    setCard(cardsRandom);
  }, []);

  React.useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.cardId === choiceTwo.cardId) {
        setCard((prev) => {
          return prev.map((el) =>
            el.cardId === choiceOne.cardId ? { ...el, matched: true } : el
          );
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.mainBoard}>
        {cards.length > 0 ? (
          <div className={styles.board}>
            {card.map((card, i) => (
              <Card
                key={i}
                card={card}
                handleClick={handleClick}
                flipped={
                  card === choiceOne ||
                  card === choiceTwo ||
                  card === card.matched
                }
              />
            ))}
          </div>
        ) : (
          <p>loadong</p>
        )}
      </div>
    </div>
  );
};
