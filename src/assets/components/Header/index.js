import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../assets/logo.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} className="imgLogo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Link to="/">&gt; Home</Link>
              <Link to="/characters">&gt; Personagens</Link>
              <Link to="/highscores">&gt; Highscores</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
