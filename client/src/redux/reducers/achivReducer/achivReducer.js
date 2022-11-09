import * as type from "./types";

const initialState = [];

const achivReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ACHIV:
      return action.payload;
    case type.CHANGE_STATUS:
      return state.map((el) =>
        el.id === action.payload ? { ...el, status: true } : el
      );
    default:
      return state;
  }
};

export default achivReducer;
