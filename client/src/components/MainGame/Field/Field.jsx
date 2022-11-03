import React from 'react'

export default function Field({ height=650, width=650 }) {
  return (
    <canvas
      style={{
        border: "3px solid black",
        backgroundColor: "green",
      }}
      height={height}
      width={width}
    />
  )
}
