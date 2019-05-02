import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Shop from './Shop';

class Weapongame extends Component {
  render() {
    const { weapon } = this.props;

    const hand1 = [];
    const hand2 = [...weapon];
    while (hand1.length < hand2.length) {
      const randIdx = Math.floor(Math.random() * hand2.length);
      const randWeapon = hand2.splice(randIdx, 1)[0];
      hand1.push(randWeapon);
    }

    const dam1 = hand1.reduce((d, w) => d + w.damage, 0);
    const dam2 = hand2.reduce((d, w) => d + w.damage, 0);

    return (
      <div>
        <Shop weapon={hand1} dam={dam1} isWinner={dam1 > dam2} />
        <hr />
        <Shop weapon={hand2} dam={dam2} isWinner={dam2 > dam1} />
      </div>
    );
  }
}

Weapongame.propTypes = {
  weapon: PropTypes.array,
};

Weapongame.defaultProps = {
  weapon: [
    { name: 'Bayonet', type: 'Knife', damage: 10 },
    { name: 'Glock', type: 'Pistol', damage: 30 },
    { name: 'UMP-45', type: 'SMG', damage: 40 },
    { name: 'M4A1', type: 'Rifle', damage: 50 },
    { name: 'AK-47', type: 'Rifle', damage: 55 },
    { name: 'XM1014', type: 'Shotgun', damage: 60 },
    { name: 'AWP', type: 'Sniper Rifle', damage: 80 },
    { name: 'Negev', type: 'Machine Gun', damage: 95 },
  ],
};

export default Weapongame;
