import React, { Component } from "react";
import api from "../../services/api";
import Image from "react-bootstrap/Image";
import Loading from "../../assets/components/Loading";
import { Link } from "react-router-dom";
import PageHeader from "../../assets/components/PageHeader";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  state = {
    characters: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get(`characters`);

    const data = response.data.map((character) => ({
      ...character,
    }));

    this.setState({ characters: data, loading: false });
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        <Container>
          <Row>
            <Col>
              <PageHeader
                titleOne="Escolha um "
                titleTwo="personagem"
                descOne="Clique em um personagem abaixo e aprenda tudo sobre ele "
                descTwo=""
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="div-characters-list fadeIn-fast-fast">
                {this.state.loading ? (
                  <Loading />
                ) : (
                  <>
                    <ul>
                      {characters.map((character) => (
                        <li key={character.id}>
                          <Link to={`/characters/${character.slug}`}>
                            <Image src={character.characterIcon} rounded />
                          </Link>
                          <p className="character-name fadeIn-fast-fast">
                            {character.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
