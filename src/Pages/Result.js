import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart';
import dataStore from '../bitcoin.json';

const Result = ({ buyDate, coinsHeld }) => (
  <div>
    <h2 className="font">Youre a twat</h2>
    <Chart buyDate={buyDate} coinsHeld={coinsHeld} />
  </div>
);

Result.propTypes = {
  buyDate: PropTypes.string,
  coinsHeld: PropTypes.number
};

Result.defaultProps = {
  buyDate: 'Jan 10, 2017',
  coinsHeld: 10
};

export default Result;
