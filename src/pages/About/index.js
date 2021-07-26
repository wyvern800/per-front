import React, { Component } from 'react';
import api from '../../services/api';
import Loading from '../../assets/components/Loading';
import PageHeader from '../../assets/components/PageHeader';
import { Row, Col, Badge, Table } from 'react-bootstrap';
import Separator from '../../assets/components/Separator';
import Info from '../../assets/components/InfoCharacter';
import DivTitle from '../../assets/components/DivTitle';
import Map from '../../assets/components/Map';
import imgmap from '../../assets/map.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
    selectedBuild: [],
    buildLocations: [],
    theLocations: [],
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
      selectedBuild: [],
      buildLocations: []
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

    const locationsReq = await api.get(`locations/all`);

    this.setState({
      selectedWeapon: theWeapon,
      loading: false,
      buildData: buildReq.data,
      theLocations: locationsReq.data,
    });
  }

  contains(a, obj) {
    return a.some(function (element) {
      return element == obj;
    });
  }

  /**
   * Sets the build to the state
   * @param {long} id
   */
  async viewBuild(id) {
    const { selectedWeapon } = this.state;

    const buildReq = await api.get(
      `builds/view/${selectedWeapon.id}/build?buildId=${id}`
    );

    this.setState({ selectedBuild: buildReq.data });

    const locsReq = await api.get(
      `locations/view/${id}`
    );

    this.setState({buildLocations: locsReq.data});

    const { buildLocations } = this.state;

    console.log(buildLocations);
  }

  render() {
    const {
      character,
      loading,
      selectedWeapon,
      buildData,
      selectedBuild,
      theLocations,
      buildLocations,
    } = this.state;

    const { stats, skills, weapons } = this.state.character;

    const { weaponSkill } = this.state.selectedWeapon;

    /*const citie = [
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
    ];*/

    return (
      <>
        <Row>
          <Col sm>
            <PageHeader titleOne="Personagem: " titleTwo={character.name} />
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
                                  <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                      <Tooltip
                                        key={`tooltip-skill-${weapon.id}`}
                                        id={`bottom`}
                                      >
                                        {weapon.name}
                                      </Tooltip>
                                    }
                                  >
                                    <div
                                      key={weapon.id}
                                      onClick={() =>
                                        this.changeWeapon(weapon.id)
                                      }
                                    >
                                      <img src={weapon.icon} />
                                    </div>
                                  </OverlayTrigger>
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
                        <Info
                          theCharacter={character}
                          characterStats={character.stats}
                        />
                      </CharacterStats>
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
                                <>
                                  <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                      <Tooltip
                                        key={`tooltip-skill-${skill.id}`}
                                        id={`bottom`}
                                      >
                                        {skill.name}
                                        <br />EP: {skill.energyPoint}
                                        <br />Cooldown: {skill.cooldown}s
                                        <br />
                                      </Tooltip>
                                    }
                                  >
                                    <div key={skill.id}>
                                      <span>{(skill.key !== "PASSIVE" ? skill.key : "P")}</span>
                                      <img src={skill.skillIcon} />
                                    </div>
                                  </OverlayTrigger>
                                </>
                              ))}

                              <OverlayTrigger
                                placement="bottom"
                                overlay={
                                  <Tooltip
                                    key={`tooltip-skill-${weaponSkill.id}`}
                                    id={`bottom`}
                                  >
                                    {weaponSkill.name}
                                    <br />- EP: {weaponSkill.energyPoint}
                                    <br />- Cooldown: {weaponSkill.cooldown}s
                                    <br />
                                  </Tooltip>
                                }
                              >
                                <div>
                                  <span>D</span>
                                  <img src={weaponSkill.weaponSkillIcon} />
                                </div>
                              </OverlayTrigger>
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
                              {typeof selectedBuild === 'undefined' ||
                              selectedBuild.length <= 0 ? (
                                <>
                                  <>
                                    <Table
                                      bordered
                                      hover
                                      variant="dark"
                                      responsive
                                    >

                                      <tbody>
                                        {buildData.map((p) => (
                                          <tr
                                            key={p.id}
                                            onClick={() => this.viewBuild(p.id)}
                                          >
                                            <td>{p.name}</td>
                                            <td>{p.description}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </Table>
                                  </>
                                </>
                              ) : (
                                <>
                                  <div>
                                    A build vai aparecer aqui quando ser
                                    selecinada na lista
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </CharacterBuilds>
                      <Separator height={10} />
                    </MiddleContainer>
                  </Col>

                  <Col>
                    <RightContainer>
                      <CharacterMap>
                        <DivTitle text="Rotas" />
                        <div>
                          <>
                            <DivMap>
                              <img src={imgmap} />
                              {buildLocations.map((city, index) => (
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip
                                      key={`tooltip-routes-${city.slugMap}`}
                                      id={`top`}
                                    >
                                      {city.description}
                                    </Tooltip>
                                  }
                                >
                                  <div
                                    key={city.id}
                                    id={city.slugMap}
                                    className={'box'}
                                  >

                                    {typeof selectedBuild === 'undefined' || selectedBuild.length <= 0 ?
                                    <>{/*Se for undefined, isso acontece*/}</> :
                                    <>
                                    <span className="routeNumber">

                                      {typeof selectedBuild === 'undefined' ||
                                      selectedBuild.length <= 0 ? (
                                        <></>
                                      ) : (typeof buildLocations[index] === 'undefined' ? <></> :
                                        <>{buildLocations[index].displayOrder}</>)}

                                      {/*city.id ID*/}
                                    </span>
                                    </>}
                                    <span className="locationName">
                                      {city.name}
                                    </span>
                                  </div>
                                </OverlayTrigger>
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
