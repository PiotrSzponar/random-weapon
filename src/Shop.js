import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Weaponcard from './Weaponcard';

import './Shop.css';

class Shop extends Component {
  render() {
    const { weapon, dam, isWinner } = this.props;

    let title;
    if (isWinner) {
      title = <h3 className="Shop-winner">WINNER!</h3>;
    } else {
      title = <h3 className="Shop-looser">LOOSER!</h3>;
    }
    return (
      <div className="Shop">
        <h1 className="Shop-damage">Total damage: {dam}</h1>
        {title}
        <div className="Shop-cards">
          {weapon.map(w => (
            <Weaponcard
              key={w.name}
              name={w.name}
              type={w.type}
              damage={w.damage}
            />
          ))}
        </div>
      </div>
    );
  }
}

Shop.propTypes = {
  weapon: PropTypes.array,
  dam: PropTypes.number.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

export default Shop;
