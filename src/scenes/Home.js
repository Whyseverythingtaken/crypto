/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import Select from '../Select';
import '../App.css';
import data from '../bitcoin.json';
import { days, months, years } from '../utilities';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investment: '',
      day: 10,
      month: 'Dec',
      year: 2016,
      todaysRate: 0,
      fireRedirect: false
    };

    this._setInvestment = this._setInvestment.bind(this);
    this._setDate = this._setDate.bind(this);
    this._generateQuery = this._generateQuery.bind(this);

    this._formSubmit = this._formSubmit.bind(this);
  }

  // Do not re-render if todaysRate has been updated.
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.todaysRate !== this.state.todaysRate) {
      return false;
    }
    return true;
  }

  // Store date in state
  _setDate(e) {
    const period = e.target.name;
    const value = e.target.value;
    this.setState({
      [period]: value
    });
  }

  _setInvestment(e) {
    this.setState({ investment: e.target.value });
  }

  _generateQuery() {
    const { day, month, year, investment } = this.state;
    const date = `${day}-${month}-${year}`;
    const formattedDate = moment(date, 'DD-MMM-YYYY').format('YYYY-MM-DD');
    const coins = investment / data[formattedDate];
    const prefs = {};
    prefs.date = formattedDate;
    prefs.coins = coins;
    prefs.investment = investment;

    // Get last item in the object and set the rate.
    const lastDate = Object.keys(data).pop();
    prefs.rate = data[lastDate];
    return queryString.stringify(prefs);
  }

  _formSubmit(e) {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  render() {
    const { fireRedirect } = this.state;
    return (
      <div className="App font">
        <div id="one">
          $<input
            type="tel"
            className="form-control value"
            id="amount"
            onChange={this._setInvestment}
            value={this.state.investment}
            placeholder="Amount"
          /> in Bitcoin
        </div>
        <div className="two">
          purchased on
          <div className="wrapper">
            <Select
              name="day"
              list={days}
              change={this._setDate}
              value={this.state.day}
            />
            <Select
              name="month"
              list={months}
              change={this._setDate}
              value={this.state.month}
            />
            <Select
              name="year"
              list={years}
              change={this._setDate}
              value={this.state.year}
            />
          </div>
        </div>
        <div className="three">
          would be worth?
        </div>

        <div>
          <form onSubmit={this._formSubmit}>
            <input
              type="submit"
              className="btn-lg btn-primary"
            />
          </form>
          {fireRedirect && (
          <Redirect to={`result?${this._generateQuery()}`} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
