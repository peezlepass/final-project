import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.slider}>
            <div className={styles.game}>
            <Link to="/quiz">
              Quiz
            </Link>
            </div>
            <div className={styles.gamesnake}>
            <Link to="/snake">
              Snake
            </Link>
            </div>
            <div className={styles.game}>
            <Link to="/xox">
              XOX
            </Link>
            </div>
            <div className={styles.game}>
            <Link to="/minesweeper">
              Minesweeper
            </Link>
            </div>
            <div className={styles.game}>
            <Link to="/memorygame">
              Memory Game
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
