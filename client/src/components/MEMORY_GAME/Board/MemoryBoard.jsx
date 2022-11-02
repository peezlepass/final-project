import React from "react";
import { Card } from "../Card/Card";
import styles from "./MemoryBoard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const MemoryBoard = () => {
  const navigate = useNavigate();
  const cards = useSelector((state) => state.memory).sort(
    () => Math.random() - 0.5
  );
  return (
    <>
      <button onClick={() => navigate("/")} className={styles.btn}>
        main
      </button>
      <div className={styles.board}>
        {cards.map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </div>
    </>
  );
};
