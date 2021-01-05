import React, { Component } from "react";

import api from "../../services/api";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {Spinner} from "react-bootstrap"
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
<div className="box-characters-list">
    <div className="box-text">
      <span className="fadeIn-fast">Escolha um personagem</span>
      <p className="fadeIn-slow">Clique em um personagem abaixo e aprenda tudo sobre ele!</p>
    </div>
</div>
        <div className="div-characters-list fadeIn-fast-fast">
        {this.state.loading ? (<Loading/>) : 
          <>
            <ul>
              {characters.map((character) => (
                <li key={character.id}>
                  <Link to={`/characters/${character.slug}`}>
                    <Image src={character.characterIcon} rounded />
                  </Link>
                  <p className="character-name fadeIn-fast-fast">{character.name}</p>
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
