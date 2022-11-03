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

  React.useEffect(() => {
    dispatch(action.getCards());
  }, []);

  return (
    <>
      <button onClick={() => navigate("/")} className={styles.btn}>
        main
      </button>
      {cards.length > 0 ? (
        <div className={styles.board}>
          {cardsRandom.map((el, i) => (
            <Card key={i} el={el} />
          ))}
        </div>
      ) : (
        <p>loadong</p>
      )}
    </>
  );
};
