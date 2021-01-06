import React from "react";
import PageHeader from "../../assets/components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import full from "../../assets/jackie-full.png";

export default function Home() {
  return (
    <>
        <Row>
          <Col>
            <PageHeader
              titleOne="Personagem: "
              titleTwo="#character.name"
            />
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <img src={full} />
              <Row>
                <Col>
                <button>Character Name</button></Col>
              </Row>
            </Col>
            <Row>
              <Col>
                GeeksforGeeks 5
                </Col>
              <Col>
                GeeksforGeeks 6
                </Col>
              <Col>
                GeeksforGeeks 7
                </Col>
            </Row>
          </Row>
        </Row>
    </>
  );
}
