import Header from "./Header";
import Field from "./Field";
import { useReducer, useEffect } from "react";
import { generateMinefield, generateUserField } from "./minesweeper";
import minesweeperReducer from "./reducer";
import WinnerMessage from "./WinnerMessage";
import Instructions from "./Instructions";

const initialState = {
  minefield: generateMinefield(81, 10, 9),
  userField: generateUserField(81),
  guessesRemaining: 10,
  timer: 0,
  gameStatus: "ready",
  width: 9,
  height: 9,
  numberOfBombs: 10,
};

export default function Board() {
  const [state, dispatch] = useReducer(minesweeperReducer, initialState);
  let mood = "";
  if (state.gameStatus === "ready") {
    mood = "smile";
  } else if (state.gameStatus === "won") {
    mood = "cool";
  } else if (state.gameStatus === "running") {
    mood = "smile";
  } else if (state.gameStatus === "over") {
    mood = "dead";
  }
  // Start the timer when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "INCREMENT_TIMER" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // When user wins => send fetch to store points
  // Array of dependensies means whenever game status
  // changes this effect will run again
  useEffect(() => {
    if (state.gameStatus === "won") {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ gameName: "minesweeper", score: 100 }),
      });
    }
  }, [state.gameStatus]);

  return (
    <>
      <div className="flex justify-center">
        {state.width === 9 ? (
          <div className="flex flex-col justify-center px-8 w-96">
            {state.gameStatus === "ready" ? (
              <Instructions></Instructions>
            ) : null}
          </div>
        ) : null}
        {/* w-[568px] */}
        <div
          className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none mt-8"
          style={{ borderStyle: "outset" }}
        >
          <Header
            leftCounter={state.guessesRemaining}
            rightCounter={state.timer}
            dispatch={dispatch}
            mood={mood}
          ></Header>
          <Field
            userField={state.userField}
            dispatch={dispatch}
            width={state.width}
          ></Field>
        </div>
        {state.width === 9 ? (
          <div className="flex flex-col justify-center px-8 w-96">
            {state.gameStatus === "won" ? (
              <WinnerMessage></WinnerMessage>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex gap-x-4 text-witcher-gold justify-center py-4">
        <button
          onClick={() => {
            dispatch({ type: "SET_DIFFICULTY", payload: "beginner" });
          }}
        >
          Beginner
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SET_DIFFICULTY", payload: "expert" });
          }}
        >
          Expert
        </button>
      </div>
    </>
  );
}
