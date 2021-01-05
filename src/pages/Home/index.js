import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

// import { Container } from './styles';

export default function Home() {
  return (
    <>
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center">Todos os personagens!</h1>
            <p className="text-center">
              Clique no seu preferido e venha se aprender mais sobre ele!
              </p>
          </Container>
        </Jumbotron>
      </div>
      <div className="d-flex flex-row justify-content-center">
        {/* AQUI ESTAVA A SEARCH BAR */}
      </div>
      <div  className="d-flex flex-row justify-content-center">
      <Card border="light" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <AutoComplete />
  </div>
    </>
  );
}
