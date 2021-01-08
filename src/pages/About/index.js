import React, { Component } from 'react';
import api from '../../services/api';
import Loading from '../../assets/components/Loading';
import PageHeader from '../../assets/components/PageHeader';
import { Row, Col, Badge, Table } from 'react-bootstrap';
import Separator from '../../assets/components/Separator';
import Chart from '../../assets/components/Chart';
import DivTitle from '../../assets/components/DivTitle';
import Map from '../../assets/components/Map';

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
                            {weapons.map((weapon) => (
                              <div
                                key={weapon.id}
                                onClick={() => this.changeWeapon(weapon.id)}
                              >
                                <img src={weapon.icon} />
                              </div>
                            ))}
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
                          {typeof skills === 'undefined' || skills.length <= 0 ? (
                            <>Ainda não existem skills cadastradas para esse personagem!</>
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
                        {typeof buildData === 'undefined' || buildData.length <= 0  ? (
                          <>
                            Ainda não existem builds desse tipo de arma para esse
                            personagem!
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
                          <Map buceta={selectedWeapon} />
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
