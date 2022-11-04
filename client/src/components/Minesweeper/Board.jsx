import Header from "./Header";
import Field from "./Field";
import { useState, useReducer } from "react";
import { generateMinefield, generateUserField } from "./generateMinefield";
import minesweeperReducer from "./reducer";

export default function Board() {
  // const [minefield, setMinefield] = useState(generateMinefield());
  // const [userField, setUserField] = useState(generateUserField());
  // const [guessesRemaining, setGuessesRemaining] = useState(10);
  // const [timer, setTimer] = useState(0);
  const initialState = {
    minefield: generateMinefield(),
    userField: generateUserField(),
    guessesRemaining: 10,
    timer: 0,
  };
  const [state, dispatch] = useReducer(minesweeperReducer, initialState);
  return (
    <div
      className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none"
      style={{ borderStyle: "outset" }}
    >
      <Header
        leftCounter={state.guessesRemaining}
        rightCounter={state.timer}
        // clickRestart={() => setMinefield(generateMinefield())}
      ></Header>
      <Field
        userField={state.userField}
        dispatch={dispatch}
        width={9}
        height={9}
      ></Field>
    </div>
  );
}
