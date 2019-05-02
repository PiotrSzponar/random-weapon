import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Weaponcard.css';

class Weaponcard extends PureComponent {
  render() {
    const { name, type, damage } = this.props;
    return (
      <div className="Weaponcard">
        <h1 className="Weaponcard-title">{name}</h1>
        <img src={`./img/${name}.png`} alt={name} />
        <div className="Weaponcard-data">
          Type: {type}
          <br />
          Damage: {damage}
        </div>
      </div>
    );
  }
}

Weaponcard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
};

export default Weaponcard;
