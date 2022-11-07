import * as type from "./types";

const initialState = [];

const achivReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ACHIV:
      return action.payload;
    default:
      return state;
  }
};

export default achivReducer;
