import React, { Component } from "react";

import api from "../../services/api";
import Loading from "../../assets/components/Loading";
import PageHeader from "../../assets/components/PageHeader";
import { Row, Col, Badge, Table } from "react-bootstrap";
import map from "../../assets/map.png";
import Separator from "../../assets/components/Separator";

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

        <div className="div-characters-list">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="characterPageWrapper">
                <Row>
                  <Col sm={3}>
                    {/* container da esquerda, só ir socando div e os componente dentro delas */}
                    <div className="leftContainer">
                      <div className="char_Lg">
                        <img src={character.characterLargeIcon} />
                      </div>
                      <Separator height={10} />
                      <div className="char_Stats">
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
                      </div>
                      <Separator height={10} />
                    </div>
                    {/** End container esquerda */}
                  </Col>

                  <Col>
                    {/* container no meio, só ir socando div e os componente dentro das div | tava sm={5}*/}
                    <div className="middleContainer">
                      <div className="char_Skills">
                      <Separator height={10} />
                        {skills.map((skill) => (
                          <ul>
                            <li key={skill.id}>
                              <img src={skill.skillIcon} />
                            </li>
                          </ul>
                        ))}
                      </div>
                      <Separator height={10} />
                      {/**aqui vão ficar as builds bonitíneas (table e etc)*/}
                      <div className="char_Builds">
                        <Table striped bordered hover variant="dark" responsive>
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
                        </Table>
                      </div>
                      <Separator height={10} />
                    </div>
                    {/** end container meio */}
                  </Col>

                  <Col sm={4}>
                    {/* container da direita, só ir socando div e os componente dentro q ele estica pra baixo*/}
                    <div className="rightContainer">
                      <div className="map">
                        <img src={map} />
                      </div>
                      <Separator height={10} />
                    </div>
                    {/** end conntainer direita */}
                  </Col>
                </Row>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default About;
