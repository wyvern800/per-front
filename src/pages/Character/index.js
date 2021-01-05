import React, { Component } from "react";

import api from "../../services/api";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Loading from "../../assets/components/Loading";
import { Link } from 'react-router-dom';

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
        {this.state.loading ? (<Loading/>) : 
          <>
            <ul>
              {characters.map((character) => (
                <li key={character.id}>
                  <Link to={`/character/${character.id}`}>
                    <Image src={character.characterIcon} rounded />
                  </Link>
                  <p className="character-name">{character.name}</p>
                </li>
              ))}
            </ul>
          </>
          }
        </div>
      </>
    );
  }
}

export default Home;
