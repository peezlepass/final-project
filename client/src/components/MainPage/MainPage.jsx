import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Field from "../MainGame/Field/Field";

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Field></Field>
        <div className={styles.content}>
          <div className={`animals ${styles.slider}`}>
            <Link to="/quiz" className={styles.gamecat}>
              Quiz
            </Link>
            <Link to="/snake" className={styles.gamesnake}>
              Snake
            </Link>
            <Link to="/xox" className={styles.gamebear}>
              XOX
            </Link>
            <Link to="/minesweeper" className={styles.gamewolf}>
              Minesweeper
            </Link>
            <Link to="/memorygame" className={styles.gamedragon}>
              Memory Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
