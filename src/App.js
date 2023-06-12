import React from "react";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./App.css";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features/>
    </div>
  );
};

export default App;
