import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import moment from 'moment';

import Chart from '../Chart';

class Result extends React.Component {

  _getRoi(investment, currentValue) {
    const profit = currentValue - investment;
    const ROI = (profit / investment) * 100;
    return `${numeral(ROI).format('0')}%`;
  }

  render() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    const { date, coins, rate, investment } = query;
    const formattedDate = moment(date, 'YYYY-MM-DD')
      .format('MMM DD YYYY');
    const currentValue = Number(coins) * Number(rate);

    const _investValue = numeral(investment).format('$0,0');
    const _currentValue = numeral(currentValue).format('$0,0');
    return (
      <div className="font col-md-offset-1 col-lg-offset-1 col-lg-10 col-md-10" style={{ fontWeight: 400, textAlign: 'center', lineHeight: 1.6 }}>
        <div style={{ marginTop: 10 }}>
          <p>
            <span className="highlight">{_investValue}</span>
            {' investment on '}
            <span className="highlight">{formattedDate}</span>
          </p>
          <p>
            {' would be worth '}
            <span className="highlight">{_currentValue}</span>
            {' today.'}
          </p>
          <p>
            {'That\'s an ROI of '}
            <span className="highlight">
              {this._getRoi(investment, currentValue)}.
            </span>
          </p>
        </div>
        <div style={{ lineHeight: 0, marginTop: 10 }}>
          <Link to="/" className="btn btn-primary">Try again</Link>
        </div>
        <Chart buyDate={date} coinsHeld={coins} />
      </div>
    );
  }
}

Result.propTypes = {
  location: PropTypes.object.isRequired
};

export default Result;
