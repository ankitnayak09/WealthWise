import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Learn from "./screens/Learn";
import Navbar from "./components/Navbar";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
