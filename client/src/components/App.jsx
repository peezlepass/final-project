import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </Layout>
  );
}
