import React from "react";
import styles from "./Card.module.css";

export const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.front} src={card.src} alt="card front" />
        <img
          className={styles.back}
          onClick={handleClick}
          src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?w=2000"
          alt="back"
        />
      </div>
    </div>
  );
};
