import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";

export const Card = ({ el }) => {
  const dispatch = useDispatch();
  const userChoice = (id) => {
    console.log(id);
  };
  return (
    <>
      <div onClick={() => userChoice(el.id)} className={styles.card}>
        Answer: {el.img}
      </div>
    </>
  );
};
