import React from 'react';
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import dataStore from './bitcoin.json';

class Result extends React.Component {

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
    console.log(data, coinsHeld);

    return (
      <div className="chart">
        <ResponsiveContainer width="80%" height={400} >
          <LineChart data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
            <YAxis dataKey="value" orientation="right" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Result;
