import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";

import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
