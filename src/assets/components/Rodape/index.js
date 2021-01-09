import React, { Component } from "react";

import { FaGithubAlt, FaFacebookF, FaPatreon } from "react-icons/fa";

export default class Rodape extends Component {
  render() {
    return (
      <>
        <div className="footer-clean">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="/aboutus">Nosso Projeto</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Developers</h3>
                <ul>
                  <li>
                    <a href="#">Matheus Ferreira</a>
                  </li>
                  <li>
                    <a href="#">Marcio Lacerda</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <FaGithubAlt />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaPatreon />
                </a>
                <p className="copyright">Dharoka © 2020</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
