import React from "react";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./App.css";
import Brand from "./components/brand/Brand";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
    </div>
  );
};

export default App;
