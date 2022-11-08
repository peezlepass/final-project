import React from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ card, handleClick, flipped }) => {
  const cards = useSelector((state) => state.memory);
  const dispatch = useDispatch();

  return (
    <>
      {cards.length > 0 ? (
        <div className={styles.card}>
          <div className={flipped ? styles.flipped : flipped.unflipped}>
            <img className={styles.front} src={card.img} alt={card.cardId} />
            <img
              className={styles.back}
              onClick={() => handleClick(card)}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_7K2XH9Dprvzux2V89T8kg20jUyJKCvWK4hWFJIpecTsVmiHkg5N2PSuYEQyE3ConpY&usqp=CAU"
              alt="back"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
