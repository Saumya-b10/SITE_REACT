import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import DiscoverSection from "../components/DiscoverSection";
import NewsSetler from "../components/NewsSetler";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <MainBanner />
      <DiscoverSection />
      <Features />
      <NewsSetler />
      <Footer />
    </div>
  );
};

export default Home;
