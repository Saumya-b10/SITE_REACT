import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col justify- min-h-screen">
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
