import React from "react";
import Navbar from "../molecules/Navbar";
import AboutUs from "../molecules/AboutUs";
import Footer from "../molecules/Footer";
import Carousel from "../molecules/Carousel";

const HomeView = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomeView;
