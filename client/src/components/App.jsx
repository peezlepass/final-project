import React from "react";
import { Route, Routes } from "react-router-dom";
import { Board } from "./QUIZ_GAME/Board/Board";

export default function App() {
  return (
    <>
      <div>Привет, я App</div>
      <Board />
    </>
  );
}
