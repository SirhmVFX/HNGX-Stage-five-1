import React from "react";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Features from "../components/Features";
import Work from "../components/Works";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Herosection />
      <Features />
      <Work />
      <Footer />
    </>
  );
}

export default Homepage;
