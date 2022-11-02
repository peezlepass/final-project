import * as type from "./types";

const initialState = [];

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CARDS:
      return action.payload;
    case type.SELECT_CARD:
      return state;
    default:
      return state;
  }
};

export default memoryReducer;
