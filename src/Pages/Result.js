import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { toDateString } from '../utilities';
import Chart from '../Chart';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.calculateROI = this.calculateROI.bind(this);
  }

  calculateROI(investment, currentValue) {
    const profit = currentValue - investment;
    const ROI = (profit / investment) * 100;
    return Math.round(ROI);
  }

  render() {
    console.log('Props', this.props);
    const { location } = this.props;
    const query = queryString.parse(location.search);


    console.log('Query', query);

    const date = toDateString(query.date);
    let currentValue = Number(query.coins) * Number(query.rate);
    currentValue = Math.round(currentValue);

    return (
      <div className="font" style={{ fontWeight: 400 }}>
        <span className="highlight">${query.investment}</span>
        {' investment on '}
        <span className="highlight">{date}</span>
        {' would be worth '}
        <span className="highlight">${currentValue}</span>
        {' today. That\'s an ROI of '}
        <span className="highlight">{this.calculateROI(query.investment, currentValue)}%</span>
        {'.'}
        <Chart buyDate={query.date} coinsHeld={query.coins} />
      </div>
    );
  }
}

Result.propTypes = {
  location: PropTypes.object.isRequired
};

export default Result;
