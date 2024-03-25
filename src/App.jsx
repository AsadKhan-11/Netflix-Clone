import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}

export default App;
