import * as type from "./types";

const initialState = {
  type: "",
  close: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_REG:
      return {
        type: "registration",
        close: true,
      };
    case type.OPEN_LOG:
      return {
        type: "login",
        close: true,
      };
    case type.CLOSE_MODAL:
      return {
        type: "",
        close: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
