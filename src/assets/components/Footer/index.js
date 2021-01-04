import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../../assets/logo.png';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand><img src={logo} className="imgLogo"/></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={window.location.pathname}>
            <Link to ="/">Home</Link>
            <Link to ="/characters">Characters List</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Footer;
