import React from 'react'
import Board from '../Board/Board'

import styles from './ticTacGame.module.css'

export default function TicTacGame() {
  return (
    <div className={styles.wrapper}>
        <Board/>
    </div>
  )
}

