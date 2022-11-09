import React, { useState } from "react";
import Board from "../Board/Board";
import { calculateWinner } from "../helper";

import styles from "./ticTacGame.module.css";

export default function TicTacGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXUsNext] = useState(true);
  const [score, setScore] = useState();
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return null;
    boardCopy[index] = xIsNext ? "x" : "0";
    setBoard(boardCopy);
    setXUsNext(!xIsNext);

    if (calculateWinner(boardCopy)) {
      fetch("/scores", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ gameName: "xox", score: 100 }),
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
      <Board cells={board} click={handleClick} />
      <div className={styles.winner}>
        {winner
          ? "Победитель " + winner
          : "Сейчас ходит " + (xIsNext ? "X" : "0")}
      </div>
    </div>
  );
}
