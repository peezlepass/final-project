import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Field from "../MainGame/Field/Field";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {user ? <Field></Field> : null}
        <div className={styles.content}>
          {user ? (
            <div className={`animals ${styles.slider}`}>
              <Link to="/quiz" className={styles.gamecat}></Link>
              <Link to="/snake" className={styles.gamesnake}></Link>
              <Link to="/xox" className={styles.gamebear}></Link>
              <Link to="/minesweeper" className={styles.gamewolf}></Link>
              <Link to="/memorygame" className={styles.gamedragon}></Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
