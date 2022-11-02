import * as type from "./types";

const initialState = [
  { id: 1, img: 1, status: "" },
  { id: 1, img: 1, status: "" },
  { id: 2, img: 2, status: "" },
  { id: 2, img: 2, status: "" },
  { id: 3, img: 3, status: "" },
  { id: 3, img: 3, status: "" },
  { id: 4, img: 4, status: "" },
  { id: 4, img: 4, status: "" },
  { id: 5, img: 5, status: "" },
  { id: 5, img: 5, status: "" },
  { id: 6, img: 6, status: "" },
  { id: 6, img: 6, status: "" },
  { id: 7, img: 7, status: "" },
  { id: 7, img: 7, status: "" },
  { id: 8, img: 8, status: "" },
  { id: 8, img: 8, status: "" },
  { id: 9, img: 9, status: "" },
  { id: 9, img: 9, status: "" },
  { id: 10, img: 10, status: "" },
  { id: 10, img: 10, status: "" },
];

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SELECT_CARD:
      return state;
    default:
      return state;
  }
};

export default memoryReducer;
