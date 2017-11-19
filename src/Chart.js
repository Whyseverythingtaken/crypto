import React from 'react';
import { LineChart, Line, Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import CustomTooltip from './ChartUtilities/CustomTooltip';

import dataStore from './bitcoin.json';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this._tickFormatter = this._tickFormatter.bind(this);
  }

  render() {
    const { buyDate, coinsHeld } = this.props;
    const data = [];
    for (const date in dataStore) {
      if (dataStore.hasOwnProperty(date)) {
        const d1 = Date.parse(buyDate);
        const d2 = Date.parse(date);
        if (d2 > d1) {
          const price = Math.round(dataStore[date] * coinsHeld);
          data.push({ date: [date], value: price });
        }
      }
    }

    return (
      <div className="chart">
        <ResponsiveContainer width="100%" height={370} >
          <LineChart data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#edc919" dot={false} />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  _tickFormatter(value) {
    return `$${value}`;
  }
}

export default Result;
