import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import PageHeader from "../../assets/components/PageHeader";
import Noticias from "../../assets/components/Noticias";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <PageHeader
            titleOne="Bem vindos ao"
            titleTwo="ETBS"
            descOne="Digite abaixo o nome do personagem que deseja obter informações de"
            descTwo="ouro!"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <AutoComplete/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Noticias className="div-cards" />
        </Col>
      </Row>
    </>
  );
}
