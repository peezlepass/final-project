import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";

export const Card = ({ el }) => {
  const dispatch = useDispatch();

  const [select, setselect] = React.useState({
    first: "",
    second: "",
  });

  const userChoice = (id) => {
    setselect({ ...select, first: id });
    console.log(select);
  };

  return (
    <>
      <div onClick={() => userChoice(el.cardId)} className={styles.card}>
        <img src={el.img} alt={el.cardId} />
      </div>
    </>
  );
};
