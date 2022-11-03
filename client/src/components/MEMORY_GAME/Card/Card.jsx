import React from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ el, userChoice }) => {
  const cards = useSelector((state) => state.memory);
  const dispatch = useDispatch();
  const elClass = el.status ? `${el.status}` : "card";
  console.log(elClass);

  return (
    <>
      {cards.length > 0 ? (
        <div onClick={() => userChoice(el.cardId)} className={styles.card}>
          <img src={el.img} alt={el.cardId} />
        </div>
      ) : null}
    </>
  );
};
