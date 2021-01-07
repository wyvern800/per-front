import React, { Component } from 'react';
import Separator from '../Separator';

import DivTitle from '../DivTitle';

import RadarChart from 'react-svg-radar-chart';
import {
  WeaponsList,
  WeaponsContainer,
  WeaponInfo,
} from './styles';

//import 'react-svg-radar-chart/build/css/index.css'

export default class Chart extends Component {
  state = {
    weapons: [],
    loading: true,
    selectedWeapon: [],
  };

  changeWeapon(id) {
    // Setting the state loading to true
    this.setState({ loading: true });

    const { selectedWeapon, weapons } = this.state;

    const foundWeapon = weapons.find((w) => w.id == id);

    this.setState({ selectedWeapon: foundWeapon });

    return console.log(foundWeapon.name);
  }

  async componentDidMount() {
    const { weaponsData } = this.props;

    this.setState({ weapons: weaponsData });

    const theWeapon = weaponsData[0];

    this.setState({ selectedWeapon: theWeapon, loading: false });
  }

  render() {
    const captions = {
      // columns
      damage: 'Dano',
      support: 'Suporte',
      movement: 'Movimento',
      crowdControl: 'C.D.G',
      defense: 'Defesa',
    };

    const { weapons, selectedWeapon } = this.state;

    /*let data = new Array(
      selectedWeapon.damage,
      selectedWeapon.support,
      selectedWeapon.movement,
      selectedWeapon.crowdControl,
      selectedWeapon.defense
    );*/

    return (
      <>
        <WeaponsList>
          <DivTitle text="Armas" />
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
          {/**<RadarChart captions={captions} data={data} size={450} />**/}
        </WeaponInfo>
      </>
    );
  }
}
