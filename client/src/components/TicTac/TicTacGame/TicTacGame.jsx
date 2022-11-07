import React, {useState} from 'react'
import Board from '../Board/Board'
import { calculateWinner } from '../helper'; 

import styles from './ticTacGame.module.css'

export default function TicTacGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXUsNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return null;
    boardCopy[index] = xIsNext ? 'x' : '0';
    setBoard(boardCopy);
    setXUsNext(!xIsNext)
  }

  return (    
    <div className={styles.wrapper}>
        <Board cells={board} click={handleClick}/>
    </div>
  )
}

