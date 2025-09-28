import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Monasteries from "./pages/Monasteries";
import Community from "./pages/Community";
import AR from "./pages/AR";
import Tour360 from "./pages/Tour360";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import IndividualMonastery from "./pages/IndividualMonastery";

const App = () => {
  return (
    <div className="bg-gray-100 font-inter dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/monasteries" element={<Monasteries />} />
          <Route path="/monasteries/:id" element={<IndividualMonastery />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ar" element={<AR />} />
          <Route path="/360tour" element={<Tour360 />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
