import React, { useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
