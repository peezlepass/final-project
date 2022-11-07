import React from 'react'
import Cell from '../Cell/Cell'

import styles from './board.module.css'

export default function Board() {
  return (
    <div className={styles.board}>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
    </div>
  )
}
