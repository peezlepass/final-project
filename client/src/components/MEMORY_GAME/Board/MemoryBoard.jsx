import React from "react";
import { Card } from "../Card/Card";
import styles from "./MemoryBoard.module.css";

export const MemoryBoard = () => {
  return (
    <>
      <div className={styles.board}>
        <Card />
      </div>
    </>
  );
};
