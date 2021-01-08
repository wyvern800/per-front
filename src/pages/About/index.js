import React, { Component } from 'react';
import api from '../../services/api';
import Loading from '../../assets/components/Loading';
import PageHeader from '../../assets/components/PageHeader';
import { Row, Col, Badge, Table } from 'react-bootstrap';
import Separator from '../../assets/components/Separator';
import Chart from '../../assets/components/Chart';
import DivTitle from '../../assets/components/DivTitle';
import Map from '../../assets/components/Map';
import imgmap from '../../assets/map.png';

import {
  CharacterPageWrapper,
  CharactersList,
  LeftContainer,
  CharacterLargePortrait,
  CharacterStats,
  CharacterChart,
  MiddleContainer,
  CharacterSkills,
  CharacterBuilds,
  RightContainer,
  CharacterMap,
  WeaponInfo,
  WeaponsContainer,
  WeaponsList,
  DivMap,
} from './styles';

class About extends Component {
  state = {
    character: [],
    selectedWeapon: [],
    loading: true,
    buildData: [],
  };

  /**
   * Used when we click on the character weapons
   * @param {int} id
   */
  changeWeapon(id) {
    const { weapons } = this.state.character;

    const foundWeapon = weapons.find((w) => w.id == id);

    const foundWeaponBuilds = foundWeapon.builds;

    this.setState({
      selectedWeapon: foundWeapon,
      buildData: foundWeaponBuilds,
    });

    return console.log(foundWeapon.name);
  }

  async componentDidMount() {
    const { slug } = this.props.match.params;

    const response = await api.get(`characters/i?slug=${slug}`);

    this.setState({
      character: response.data,
    });

    const { weapons } = this.state.character;

    const theWeapon = weapons[0];

    // Gets the builds
    const buildReq = await api.get(`builds/view/${theWeapon.id}`);

    this.setState({
      selectedWeapon: theWeapon,
      loading: false,
      buildData: buildReq.data,
    });
  }

  render() {
    const { character, loading, selectedWeapon, buildData } = this.state;

    const { stats, skills, weapons } = this.state.character;

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

    return (
      <>
        <Row>
          <Col sm>
            <PageHeader
              titleOne="Personagem: "
              titleTwo={character.name}
              descOne="Aqui estão algumas informações"
            />
          </Col>
        </Row>

        <CharactersList>
          {loading ? (
            <Loading />
          ) : (
            <>
              <CharacterPageWrapper>
                <Row>
                  <Col sm={3}>
                    <LeftContainer>
                      <DivTitle text={character.name} />
                      <CharacterLargePortrait>
                        <img src={character.characterLargeIcon} />
                      </CharacterLargePortrait>
                      <Separator height={10} />
                      <CharacterChart>
                        <WeaponsList>
                          <DivTitle text="Armas" />
                          <Separator height={10} />
                          <WeaponsContainer>
                            {typeof weapons === 'undefined' ||
                            weapons.length <= 0 ? (
                              <>
                              Ainda não existem armas cadastradas para esse
                              personagem!
                              </>
                            ) : (
                              <>
                                {weapons.map((weapon) => (
                                  <div
                                    key={weapon.id}
                                    onClick={() => this.changeWeapon(weapon.id)}
                                  >
                                    <img src={weapon.icon} />
                                  </div>
                                ))}
                              </>
                            )}
                          </WeaponsContainer>
                        </WeaponsList>
                        <Separator height={10} />
                        <WeaponInfo>
                          Selected Weapon: {selectedWeapon.name}
                        </WeaponInfo>
                      </CharacterChart>
                      <Separator height={10} />
                      <CharacterStats>
                        <DivTitle text="Infos" />
                        <p>
                          LP Base:
                          <Badge variant="success">
                            {stats.vitalityPoints}
                          </Badge>
                        </p>
                        <p>
                          EP Base:
                          <Badge variant="info">{stats.energyPoints}</Badge>
                        </p>
                        <p>
                          AP Base:
                          <Badge variant="warning">{stats.attackPower}</Badge>
                        </p>
                        <p>
                          DEF Base:
                          <Badge variant="light">{stats.defense}</Badge>
                        </p>
                        <p>
                          Tier:
                          <Badge variant="dark">
                            {character.characterTier}
                          </Badge>
                        </p>
                      </CharacterStats>
                      <Separator height={10} />
                    </LeftContainer>
                  </Col>

                  <Col>
                    <MiddleContainer>
                      <CharacterSkills>
                        <DivTitle text="Habilidades" />
                        <div>
                          {typeof skills === 'undefined' ||
                          skills.length <= 0 ? (
                            <>
                              Ainda não existem skills cadastradas para esse
                              personagem!
                            </>
                          ) : (
                            <>
                              {skills.map((skill) => (
                                <li key={skill.id}>
                                  <img src={skill.skillIcon} />
                                </li>
                              ))}
                            </>
                          )}
                        </div>
                      </CharacterSkills>
                      <Separator height={10} />
                      <CharacterBuilds>
                        <DivTitle text="Builds" />
                        <div className="buildsDiv">
                          {typeof buildData === 'undefined' ||
                          buildData.length <= 0 ? (
                            <>
                              Ainda não existem builds desse tipo de arma para
                              esse personagem!
                            </>
                          ) : (
                            <>
                              {
                                <Table
                                  striped
                                  bordered
                                  hover
                                  variant="dark"
                                  responsive
                                >
                                  <thead>
                                    <tr>
                                      <th>Nome</th>
                                      <th>Descrição</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {buildData.map((p) => (
                                      <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.description}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>
                              }
                            </>
                          )}
                        </div>
                      </CharacterBuilds>
                      <Separator height={10} />
                    </MiddleContainer>
                  </Col>

                  <Col sm={4}>
                    <RightContainer>
                      <CharacterMap>
                        <DivTitle text="Rotas" />
                        <div>
                          <>
                            <DivMap>
                              <img src={imgmap} />
                              {citie.map((city, index) => (
                                <div
                                  key={index}
                                  id={city.pos}
                                  className={'box'}
                                >
                                  <span className="routeNumber">{city.id}</span>
                                  <span className="locationName">
                                    {city.name}
                                  </span>
                                </div>
                              ))}
                            </DivMap>
                          </>
                        </div>
                      </CharacterMap>
                      <Separator height={10} />
                    </RightContainer>
                  </Col>
                </Row>
              </CharacterPageWrapper>
            </>
          )}
        </CharactersList>
      </>
    );
  }
}

export default About;
