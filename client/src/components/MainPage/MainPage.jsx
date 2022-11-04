import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <Link to="/quiz" className={styles.game}>
            Quiz
          </Link>
          <Link to="/snake" className={styles.game}>
            Snake
          </Link>
          <Link to="/xox" className={styles.game}>
            XOX
          </Link>
          <Link to="/minesweeper" className={styles.game}>
            Minesweeper
          </Link>
          <Link to="/memorygame" className={styles.game}>
            Memory Game
          </Link>
        </div>
      </div>
    </div>
  );
};
