import React, { Component } from 'react';
import { DivMap } from './styles';
import imgmap from '../../../assets/map.png';

export default class Map extends Component {
  state = {
    citiesData: [],
  };

  async componentDidMount() {

    const citie = [
      { id: 1, pos: 'map01', name: 'Beco', top: 13, left: 42 },
      { id: 2, pos: 'map02', name: 'Est. dos Arqueiros', top: 26, left: 10 },
      { id: 3, pos: 'map03', name: 'Templo', top: 27, left: 79 },
      { id: 4, pos: 'map04', name: 'Avenida', top: 32, left: 57 },
      { id: 5, pos: 'map05', name: 'Escola', top: 38, left: 33 },
      { id: 6, pos: 'map06', name: 'Laboratorio', top: 48, left: 39 },
      { id: 7, pos: 'map07', name: 'Hotel', top: 43, left: 13 },
      { id: 8, pos: 'map08', name: 'Lagoa', top: 46, left: 64 },
      { id: 9, pos: 'map9', name: 'Hospital', top: 55, left: 84 },
      { id: 10, pos: 'map10', name: 'Praia', top: 65, left: 9 },
      { id: 11, pos: 'map11', name: 'Floresta', top: 63, left: 34 },
      { id: 12, pos: 'map12', name: 'Cemiterio', top: 66, left: 65 },
      { id: 13, pos: 'map13', name: 'Bairro Nobre', top: 66, left: 65 },
      { id: 14, pos: 'map14', name: 'Capela', top: 76, left: 53 },
      { id: 15, pos: 'map15', name: 'Fabrica', top: 78, left: 76 },
      { id: 16, pos: 'map16', name: 'Docas', top: 86, left: 47 },
    ];

    this.setState({ citiesData: citie });
  }

  render() {
    const { citiesData } = this.state;

    return (
      <>
        <DivMap>
          <img src={imgmap} alt={imgmap} />
          {citiesData.map((city, index) => (
            <div key={index} id={city.pos} className={'box'}>
              <span className="routeNumber">{city.id}</span>
              <span className="locationName">{city.name}</span>
            </div>
          ))}
        </DivMap>
      </>
    );
  }
}
