/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/
/* eslint-disable react/jsx-filename-extension */


import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import history from '../history';
import Select from '../Select';
import '../App.css';
import data from '../bitcoin.json';
import formatDate from '../utilities';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialInvestment: '',
      day: 10,
      month: 'Jan',
      year: 2011,
      query: '/result?test=4'
    };

    this._selectedInvestment = this._selectedInvestment.bind(this);
    // this._setDate = this._setDate.bind(this);
    // this._updateBitcoinCost = this._updateBitcoinCost.bind(this);
    this._selectedDate = this._selectedDate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _selectedDate(e) {
    console.log(e.target.name);
    const period = e.target.name;
    const value = e.target.value;
    this.setState({
      [period]: value
    });
  }

  _selectedInvestment(e) {
    this.setState({ initialInvestment: e.target.value });
  }

  _onSubmit() {
    const { day, month, year, initialInvestment } = this.state;
    const date = formatDate(day, month, year);
    const btcCost = data[date];
    const prefs = {};
    prefs.date = date;
    prefs.cost = btcCost;
    prefs.investment = initialInvestment;
    const stringified = queryString.stringify(prefs);
    console.log(stringified, btcCost, date);
    // history.push(`/result`);
  }

  //
  // _setDate(date) {
  //   const btc = this._updateBitcoinCost(date);
  //   this.setState({ date, bitcoinCost: btc });
  // }
  //
  // _updateBitcoinCost(date) {
  //   // const date = this.state.date;
  //   const buyDate = date.format('YYYY-MM-DD');
  //   console.log(data[buyDate], data['2016-01-01'], buyDate, this.state);
  //   return data[buyDate];
  // }

  render() {
    console.log(this.state);
    // let totalCoins = this.state.initialInvestment / this.state.bitcoinCost;
    // totalCoins = _.round(totalCoins, 4);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Nov', 'Dec'];
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
      <div className="App font">
        <div id="one">
          $<input
            type="tel"
            className="form-control value"
            id="amount"
            onChange={this._selectedInvestment}
            value={this.state.initialInvestment}
            placeholder="Amount"
          /> in Bitcoin
        </div>
        <div className="two">
          purchased on
          <div className="wrapper">
            <Select
              name="day"
              list={days}
              change={this._selectedDate}
              value={this.state.day}
            />
            <Select
              name="month"
              list={months}
              change={this._selectedDate}
              value={this.state.month}
            />
            <Select
              name="year"
              list={years}
              change={this._selectedDate}
              value={this.state.year}
            />
          </div>
        </div>
        <div className="three">
          would be worth?
        </div>

        <div>
          <form onSubmit={() => history.push({
            pathname: '/result',
            query: { a: 'a' }
          })}>
            <input
              type="submit"
              className="btn-lg btn-primary"
            />
          </form>

        </div>
      </div>
    );
  }
}

export default App;
