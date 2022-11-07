import * as type from "./types";

export const getAchiv = () => {
  return async (dispatch) => {
    fetch("/cabinet")
      .then((res) => res.json())
      .then((json) => dispatch({ type: type.GET_ACHIV, payload: json }));
  };
};
