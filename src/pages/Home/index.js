import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import box01 from '../../assets/box-01.jpg';
import box02 from '../../assets/box-02.jpg';

// import { Container } from './styles';

export default function Home() {
  return (
    <>
<div className="box-home">
    <div className="box-text">
      <h1>Bem vindos ao ETBS</h1>
      <p>Digite abaixo o nome do personagem que deseja obter informações de ouro</p>
    </div>
</div>
      <div className="d-flex flex-row justify-content-center">
        <AutoComplete />
      </div>
      <div  className="d-flex justify-content-center">
      <CardDeck>
  <Card>
    <Card.Img variant="top" src={box01} className="box-img" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={box02} className="box-img" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={box01} className="box-img" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
  </div>
    </>
  );
}
