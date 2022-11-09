import React from 'react'
import Cell from '../Cell/Cell'

import styles from './board.module.css'

export default function Board({cells, click}) {
  return (
    <div className={styles.board}>
      {
        cells.map((cell, i) => (
          // console.log(cell)
          <Cell key={i} props={cell} click = {click} i={i}/>
        ))
      }
    </div>
  )
}
