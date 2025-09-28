import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import DiscoverSection from "../components/DiscoverSection";
import NewsSetler from "../components/NewsSetler";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <DiscoverSection />
      <Features />
      <NewsSetler />
    </div>
  );
};

export default Home;
