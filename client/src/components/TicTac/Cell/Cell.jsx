import React from 'react'

import styles from './cell.module.css'

export default function Cell({props, click, i}) {
  return (
    <button className={styles.cell} onClick={() => click(i)}>{props}</button>
  )
}
