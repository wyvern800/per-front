import React, { Component } from 'react';
import { DivMap } from './styles';
import imgmap from '../../../assets/map.png';

export default class Map extends Component {
  state = {
    cities: [],
  };

  async componentDidMount() {
    let citie = [
      { id: 0, pos: 'map01', name: 'Beco', top: 13, left: 42 },
      { id: 1, pos: 'map02', name: 'Estande dos Arqueiros', top: 26, left: 10 },
      { id: 2, pos: 'map03', name: 'Templo', top: 27, left: 79 },
      { id: 3, pos: 'map04', name: 'Avenida', top: 32, left: 57 },
      { id: 4, pos: 'map05', name: 'Escola', top: 38, left: 33 },
      { id: 5, pos: 'map06', name: 'Laboratorio', top: 48, left: 39 },
      { id: 6, pos: 'map07', name: 'Hotel', top: 43, left: 13 },
      { id: 7, pos: 'map08', name: 'Lagoa', top: 46, left: 64 },
      { id: 8, pos: 'map9', name: 'Hospital', top: 55, left: 84 },
      { id: 9, pos: 'map10', name: 'Praia', top: 65, left: 9 },
      { id: 10, pos: 'map11', name: 'Floresta', top: 63, left: 34 },
      { id: 11, pos: 'map12', name: 'Cemiterio', top: 66, left: 65 },
      { id: 12, pos: 'map13', name: 'Bairro Nobre', top: 66, left: 65 },
      { id: 13, pos: 'map14', name: 'Capela', top: 76, left: 53 },
      { id: 14, pos: 'map15', name: 'Fabrica', top: 78, left: 76 },
      { id: 15, pos: 'map16', name: 'Docas', top: 86, left: 47 },
    ];

    this.setState({ cities: citie });
  }

  render() {
    const { cities } = this.state;

    return (
      <>
        <DivMap>
          <img src={imgmap} alt="" />
          {cities.map((city) => (
            <div
              key={city.id}
              id={city.pos}
              className={'box'}
            >
              <span>{city.name}</span>
            </div>
          ))}
        </DivMap>
      </>
    );
  }
}
