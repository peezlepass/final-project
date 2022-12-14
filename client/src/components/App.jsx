import React from "react";
import { Route, Routes } from "react-router-dom";

import { Board } from "./QUIZ_GAME/Board/Board";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Header from "./Header/Header";
import { MainPage } from "./MainPage/MainPage";
import { MemoryBoard } from "./MEMORY_GAME/Board/MemoryBoard";
import MinesweeperPage from "./Minesweeper/MinesweeperPage";
import Canvas from "./SNAKE_GAME/Canvas/Canvas";
import { Cabinet } from "./Cabinet/Cabinet";
import TicTacGame from "./TicTac/TicTacGame/TicTacGame";
// import Field from "./MainGame/Field/Field";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<Board />} />
        <Route path="/memorygame" element={<MemoryBoard />} />
        <Route path="/xox" element={<TicTacGame/>}/>
        {/* <Route path="/" element={<Board />} /> */}
        <Route path="/minesweeper" element={<MinesweeperPage/>}/>
        {/* <Route path="/" element={<Board />} /> */}
        <Route path="/snake" element={<Canvas />} />
        <Route path="/cabinet" element={<Cabinet />} />
        {/* <Route path="/maingame" element={<Field />} /> */}
      </Routes>
    </>
  );
}
