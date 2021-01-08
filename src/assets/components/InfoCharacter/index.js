import React, { Component } from 'react';
import { InfoCharacter } from './styles';
import { GiPowerLightning, GiHearts, GiZeusSword, GiCrackedShield, GiAchievement } from "react-icons/gi";
import Table from 'react-bootstrap/Table';

export default class Info extends Component {
  render() {

    return (
      <>
      <InfoCharacter>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td><i className="vida"><GiHearts/></i> Vida: <span>300{/** {stats.vitalityPoints} **/}</span></td>
            </tr>
            <tr>
              <td><i className="energia"><GiPowerLightning/></i> Energia: test{/** {stats.energyPoints} **/}</td>
            </tr>
            <tr>
              <td><i className="poder-de-ataque"><GiZeusSword/></i> Poder de ataque: test{/** {stats.attackPower} **/}</td>
            </tr>
            <tr>
              <td><i className="defesa"><GiCrackedShield/></i> Defesa: test{/** {stats.defense} **/}</td>
            </tr>
            <tr>
              <td><i className="tier"><GiAchievement/></i> Tier: test{/** {character.characterTier} **/}</td>
            </tr>
          </tbody>
        </Table>
        </InfoCharacter>
      </>
    );
  }
}
