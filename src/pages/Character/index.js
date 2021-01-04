import React, { Component } from "react";

import api from "../../services/api";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

class Home extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`characters/?charId=${id}`);

    const data = response.data.map(character => ({
      ...character
    }));

    this.setState({ characters: data });
  }

  render() {
    const { characters } = this.state;

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
        <div className="div-characters-list">
          <ul>
            {characters.map(character => (
              <li key={character.id}>
                  <Image src={character.characterIcon} rounded />
                  <p className="character-name">{character.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
