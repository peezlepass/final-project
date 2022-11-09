import * as type from "./types";

export const getAchiv = () => {
  return async (dispatch) => {
    fetch("/cabinet")
      .then((res) => res.json())
      .then((json) => dispatch({ type: type.GET_ACHIV, payload: json }));
  };
};

export const changeStatus = (id) => {
  console.log(id);
  return async (dispatch) => {
    const response = await fetch("/cabinet", {
      method: "PUT",
      body: JSON.stringify({
        id,
      }),
      headers: { "Content-type": "application/json" },
    });
    console.log(response);
    dispatch({ type: type.CHANGE_STATUS, payload: id });
  };
};
