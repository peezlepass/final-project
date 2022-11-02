import React from "react";
import { useSelector } from "react-redux";
import styles from "./Card.module.css";

export const Card = () => {
  const cards = useSelector((state) => state.memory);
  console.log(cards);
  return <div>Card</div>;
};
