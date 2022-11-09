import {
  findReveals,
  generateMinefield,
  generateUserField,
  hasWon,
} from "./minesweeper";

export default function minesweeperReducer(prevState, { type, payload }) {
  switch (type) {
    case "REVEAL_CELL":
      // Если юзер проиграл или выиграл - запрещаю ему открывать новые клетки
      if (prevState.gameStatus === "over" || prevState.gameStatus === "won") {
        return prevState;
      }

      // Если юзер нажал на бомбу, то мы показываем ему все бомбы
      // => игра закончена
      if (prevState.minefield[payload] === "X") {
        return {
          ...prevState,
          userField: prevState.userField.map((cell, index) => {
            if (prevState.minefield[index] === "X" && cell === "G") {
              return "G";
            } else if (prevState.minefield[index] !== "X" && cell === "G") {
              return "GR";
            } else if (prevState.minefield[index] === "X") {
              return index === payload ? "XR" : "X";
            } else {
              return cell;
            }
          }),
          gameStatus: "over",
        };
      }

      const reveals = findReveals(
        payload,
        prevState.minefield,
        prevState.userField,
        prevState.width
      );
      const newUserField = prevState.userField.map((cell, index) => {
        if (reveals.includes(index)) {
          return prevState.minefield[index];
        } else {
          return cell;
        }
      });
      if (hasWon(newUserField, prevState.numberOfBombs)) {
        return {
          ...prevState,
          gameStatus: "won",
          userField: newUserField.map((cell) => {
            if (cell === "U") {
              return "G";
            } else {
              return cell;
            }
          }),
        };
      } else {
        return {
          ...prevState,
          gameStatus: "running",
          userField: newUserField,
        };
      }

    case "MARK_POTENTIAL_BOMB":
      // Если юзер проиграл или выиграл, то он не может нажать на другие кнопки
      if (prevState.gameStatus === "over" || prevState.gameStatus === "won") {
        return prevState;
      }
      // Если юзер проставил все флажки, то больше флагов он проставлять не может
      if (prevState.guessesRemaining === 0) {
        return prevState;
      }
      // Проставление красных флагов, счетчик уменьшается
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (index === payload) {
            return "G";
          } else {
            return cell;
          }
        }),
        guessesRemaining: prevState.guessesRemaining - 1,
      };

    // Если юзер проиграл или выиграл, то он не может нажать на другие кнопки
    case "UNMARK_POTENTIAL_BOMB":
      if (prevState.gameStatus === "over" || prevState.gameStatus === "won") {
        return prevState;
      }
      // Забираем флажки обратно, счетчик увеличивается
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (index === payload) {
            return "U";
          } else {
            return cell;
          }
        }),
        guessesRemaining: prevState.guessesRemaining + 1,
      };

    // Ресет всего в первоначальное состояние
    case "RESTART":
      return {
        ...prevState,
        minefield: generateMinefield(
          prevState.width * prevState.height,
          prevState.numberOfBombs,
          prevState.width
        ),
        userField: generateUserField(prevState.width * prevState.height),
        guessesRemaining: prevState.numberOfBombs,
        timer: 0,
        gameStatus: "ready",
      };

    // Если игра идет, то таймер увеличивается и максимум может достичь 999
    case "INCREMENT_TIMER":
      if (prevState.gameStatus === "running") {
        return {
          ...prevState,
          timer: Math.min(999, prevState.timer + 1),
        };
      } else {
        return prevState;
      }

    case "SET_DIFFICULTY":
      if (payload === "beginner") {
        return {
          ...prevState,
          minefield: generateMinefield(81, 10, 9),
          userField: generateUserField(81),
          guessesRemaining: 10,
          timer: 0,
          gameStatus: "ready",
          width: 9,
          height: 9,
          numberOfBombs: 10,
        };
      } else if (payload === "expert") {
        return {
          ...prevState,
          minefield: generateMinefield(160, 25, 16),
          userField: generateUserField(160),
          guessesRemaining: 25,
          timer: 0,
          gameStatus: "ready",
          width: 16,
          height: 10,
          numberOfBombs: 25,
        };
      }

    default:
      return prevState;
  }
}
