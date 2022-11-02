import React from "react";
import { Route, Routes } from "react-router-dom";

import { Board } from "./QUIZ_GAME/Board/Board";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Layout from "./Layout/Layout";
import MinesweeperPage from "./Minesweeper/MinesweeperPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/" element={<Board />} />
        <Route
          path="/minesweeper"
          element={<MinesweeperPage></MinesweeperPage>}
        />
      </Routes>
    </Layout>
  );
}
