import React from "react";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MemoryBoard.module.css";
import * as action from "../../../redux/reducers/memoryReducer/action";
import * as type from "../../../redux/reducers/memoryReducer/types";

export const MemoryBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.memory);
  const cardsRandom = [...cards].sort(() => Math.random() - 0.5);

  const [prev, setPrev] = React.useState(-1);

  React.useEffect(() => {
    dispatch(action.getCards());
  }, []);

  const check = (current) => {
    if (cards[current].id === cards[prev].id) {
      alert(1);
    } else {
      alert(2);
    }
  };

  const userChoice = (id) => {
    if (prev === -1) {
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <>
      <button onClick={() => navigate("/")} className={styles.btn}>
        main
      </button>
      {cards.length > 0 ? (
        <div className={styles.board}>
          {cardsRandom.map((el, i) => (
            <Card key={i} el={el} userChoice={userChoice} />
          ))}
        </div>
      ) : (
        <p>loadong</p>
      )}
    </>
  );
};
