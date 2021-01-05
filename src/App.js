import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import api from "./services/api";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
