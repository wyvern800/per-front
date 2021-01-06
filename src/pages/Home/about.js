import React from "react";
import PageHeader from "../../assets/components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import full from "../../assets/jackie-full.png";
import map from "../../assets/map.png";

export default function Home() {
  return (
    <>
      <Row>
        <Col sm>
          <PageHeader
            titleOne="Personagem: "
            titleTwo="#character.name"
            descOne="Aqui estão algumas informações"
          />
        </Col>
      </Row>
      
      <div className="characterPageWrapper">
        {/* container da esquerda, só ir socando div e os componente dentro das div*/}
        <Row>
          <Col sm={3}>
            <div className="char_Lg">
              <img src={full} />
            </div>
            <div className="char_Stats">Status dos char bonitinho, pode ir socando q o bang vai crescendo conforme vai enfiando as arroba dentro</div>
          </Col>
          {/* container no meio, só ir socando div e os componente dentro das div | tava sm={5}*/}
          <Col>
            <div className="skillsContainer">
              <div className="char_Skills">
                Skills aqui, quanto mais div vc colocar, mais ela estica pra baixo e empurra o tamanho da tela,
                finalmente o pai aprendeu, já posso trampa pro caborge
              </div>
            </div>
            <div className="char_Builds">
              aqui vão ficar as builds bonitíneas (table e etc)
            </div>
          </Col>
          {/* container da direita, só ir socando div e os componente dentro das div*/}
          <Col sm={4}>
            <div className="mapContainer">
              <img src={map} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
