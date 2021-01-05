import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import box01 from '../../assets/box-01.jpg';
import box02 from '../../assets/box-02.jpg';
import PageHeader from '../../assets/components/PageHeader';

export default function Home() {
  return (
    <>
      <PageHeader titleOne="Bem vindos ao" titleTwo="ETBS" descOne="Digite abaixo o nome do personagem que deseja obter informações de" descTwo="ouro!"/>
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
        additional content. This content is a.
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
        additional content. This card has even.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
  </div>
    </>
  );
}
