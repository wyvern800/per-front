import React, { Component } from 'react';
import { InfoCharacter } from './styles';
import { GiPowerLightning, GiHearts, GiZeusSword, GiCrackedShield, GiAchievement } from "react-icons/gi";
import Table from 'react-bootstrap/Table';

export default class Info extends Component {
  state = {
      character: [],
      stats: []
  }

  componentDidMount() {
    const { theCharacter, characterStats } = this.props;

    this.setState({character: theCharacter, stats: characterStats});
  }

  render() {
    const { character, stats } = this.state;

    return (
      <>
      <InfoCharacter>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td><i className="vida"><GiHearts/></i> Vida: <span>{ stats.vitalityPoints}</span></td>
            </tr>
            <tr>
              <td><i className="energia"><GiPowerLightning/></i> Energia: {stats.energyPoints}</td>
            </tr>
            <tr>
              <td><i className="poder-de-ataque"><GiZeusSword/></i> Poder de ataque: {stats.attackPower}</td>
            </tr>
            <tr>
              <td><i className="defesa"><GiCrackedShield/></i> Defesa: {stats.defense}</td>
            </tr>
            <tr>
              <td><i className="tier"><GiAchievement/></i> Tier: {character.characterTier}</td>
            </tr>
          </tbody>
        </Table>
        </InfoCharacter>
      </>
    );
  }
}
