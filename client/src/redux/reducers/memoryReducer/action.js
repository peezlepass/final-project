import * as type from "./types";

export const getCards = () => {
  return (dispatch) => {
    fetch("/memorygame")
      .then((res) => res.json())
      .then((json) => dispatch({ type: type.GET_CARDS, payload: json }));
  };
};
