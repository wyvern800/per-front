import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import box01 from "../../assets/box-01.jpg";
import box02 from "../../assets/box-02.jpg";
import box03 from "../../assets/box-03.jpg";

import PageHeader from "../../assets/components/PageHeader";
export default function Home() {
  return (
    <>
      <PageHeader
        titleOne="Bem vindos ao"
        titleTwo="ETBS"
        descOne="Digite abaixo o nome do personagem que deseja obter informações de"
        descTwo="ouro!"
      />
      <div className="d-flex flex-row justify-content-center">
        <AutoComplete />
      </div>
      <div className="d-flex justify-content-center">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={box01} className="box-img" />
            <Card.Body>
              <Card.Title>O que posso fazer?</Card.Title>
              <Card.Text>
                Você pode pesquisar o seu personagem favorito, assim aprendendo
                tudo sobre ele!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={box02} className="box-img" />
            <Card.Body>
              <Card.Title>Aprenda Buildar!</Card.Title>
              <Card.Text>
                Seu problema acaba agora! Escolha seu personagem preferido e
                veja as melhores builds!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={box03} className="box-img" />
            <Card.Body>
              <Card.Title>Aprenda Combos!</Card.Title>
              <Card.Text>
                Aprenda a bater o mais eficiênte com seu personagem!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}
