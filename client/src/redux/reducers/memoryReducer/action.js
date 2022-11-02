import { json } from "react-router-dom";
import * as type from "./types";

export const getCards = () => {
  return (duspatch) => {
    fetch("/cards")
      .then((res) => res.json())
      .then((json) => dispatch({ type: type.GET_CARDS, paylaod: json }));
  };
};
