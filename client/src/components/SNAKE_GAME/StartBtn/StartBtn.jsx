import React from 'react'
import styles from './startBtn.module.css'

export default function StartBtn({startGame}) {
  return (
    <>
    <button className={styles.btn} onClick={startGame}>Start Game</button>
    </>
  )
}
