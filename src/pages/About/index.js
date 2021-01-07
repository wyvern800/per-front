import React, { Component } from 'react';
import api from '../../services/api';
import Loading from '../../assets/components/Loading';
import PageHeader from '../../assets/components/PageHeader';
import { Row, Col, Badge, Table } from 'react-bootstrap';
import Separator from '../../assets/components/Separator';
import Chart from '../../assets/components/Chart';
import DivTitle from '../../assets/components/DivTitle';
import Map from '../../assets/components/Map'

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
} from './styles';

class About extends Component {
  state = {
    character: [],
    loading: true,
  };

  async componentDidMount() {
    const { slug } = this.props.match.params;

    const response = await api.get(`characters/i?slug=${slug}`);

    this.setState({ character: response.data, loading: false });
  }

  render() {
    const { character, loading } = this.state;

    const { stats, weapons, skills } = this.state.character;

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
                      <DivTitle text="Foto" />
                      <CharacterLargePortrait>
                        <img src={character.characterLargeIcon} />
                      </CharacterLargePortrait>
                      <Separator height={10} />
                      <CharacterChart>
                        <Chart weaponsData={character.weapons} />
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
                          {skills.map((skill) => (
                            <li key={skill.id}>
                              <img src={skill.skillIcon} />
                            </li>
                          ))}
                        </div>
                      </CharacterSkills>
                      <Separator height={10} />
                      <CharacterBuilds>
                        <DivTitle text="Builds" />
                        Builds will be here
                        {/**<Table striped bordered hover variant="dark" responsive>
                          <thead>
                            <tr>
                              <th>Icone</th>
                              <th>Nome</th>
                              <th>Custo</th>
                              <th>Cooldown</th>
                            </tr>
                          </thead>
                          <tbody>
                            {skills.map((skill) => (
                              <tr key={skill.id}>
                                <td>
                                  <img src={skill.skillIcon} />
                                </td>
                                <td>{skill.key}</td>
                                <td>{skill.name}</td>
                                <td>{skill.energyPoint}</td>
                                <td>{skill.cooldown}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table> */}
                      </CharacterBuilds>
                      <Separator height={10} />
                    </MiddleContainer>
                  </Col>

                  <Col sm={4}>
                    <RightContainer>
                      <CharacterMap>
                        <DivTitle text="Mapa" />
                        <Map />
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
