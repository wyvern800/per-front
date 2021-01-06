import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./assets/components/Header";
import Rodape from "./assets/components/Rodape";
import ScrollToTop from "./assets/components/ScrollToTop";
import Routes from "./routes";
import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Container>
            <Routes />
          </Container>
          <Rodape />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
