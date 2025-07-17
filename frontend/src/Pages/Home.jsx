import React from "react";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import ProductGrid from "../Components/ProductGrid";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <ProductGrid />
      <Testimonials className="" />
      <Contact />
    </div>
  );
};

export default Home;
