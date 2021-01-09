import React, { Component } from 'react';
import { AboutStyle } from './styles';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import marcio from '../../assets/box-01.jpg';

class AboutUS extends Component {
  componentDidMount() {
    document.title = 'Sobre nós';
  }

  render() {
    return (
      <>
        <AboutStyle>
          <div className="first-div">
            <h1>Como tudo começou...</h1>
          </div>
          <hr className="line" />
          <div className="first-div">
            <p className="fadeIn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <hr className="line" />
          <div className="team">
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={marcio} />
              <Card.Body>
                <Card.Title>Marcio Lacerda</Card.Title>
                <Card.Text>Descrição aqui!</Card.Text>
                <a href="#">
                  <Button variant="primary">GitHub</Button>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={marcio} />
              <Card.Body>
                <Card.Title>Matheus Ferreira</Card.Title>
                <Card.Text>Descrição aqui!</Card.Text>
                <a href="#">
                  <Button variant="primary">GitHub</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        </AboutStyle>
      </>
    );
  }
}

export default AboutUS;
