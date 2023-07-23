import React from "react";

import { BsArrowUpShort } from "react-icons/bs";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <a href="#" className="floatingBtn">
        <BsArrowUpShort size={25} />
      </a>
    </div>
  );
}

export default App;
