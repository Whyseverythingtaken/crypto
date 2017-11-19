import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import moment from 'moment';

import Chart from '../Chart';

class Result extends React.Component {

  calculateROI(investment, currentValue) {
    const profit = currentValue - investment;
    const ROI = (profit / investment) * 100;
    return numeral(ROI).format('0');
  }

  render() {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    const date = moment(query.date).format('MMM DD YYYY');
    const currentValue = Number(query.coins) * Number(query.rate);

    const _investValue = numeral(query.investment).format('$0,0');
    const _currentValue = numeral(currentValue).format('$0,0');
    return (
      <div className="font col-md-offset-1 col-lg-offset-1 col-lg-10 col-md-10" style={{ fontWeight: 400, textAlign: 'center', lineHeight: 1.6 }}>
        <div className="">
          <p>
            <span className="highlight">{_investValue}</span>
            {' investment on '}
            <span className="highlight">{date}</span>
          </p>
          <p>
            {' would be worth '}
            <span className="highlight">{_currentValue}</span>
            {' today.'}
          </p>
          <p>
            {'That\'s an ROI of '}
            <span className="highlight">
              {this.calculateROI(query.investment, currentValue)}%
            </span>
          </p>
        </div>
        <div>
          <Link to="/" className="btn btn-primary">Try again</Link>
        </div>
        <Chart buyDate={query.date} coinsHeld={query.coins} />
      </div>
    );
  }
}

Result.propTypes = {
  location: PropTypes.object.isRequired
};

export default Result;
