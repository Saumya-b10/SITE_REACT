import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gray-100 font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
