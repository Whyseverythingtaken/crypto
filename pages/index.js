import React, { useState } from "react";
import queryString from "query-string";
import moment from "moment";
import { useRouter } from "next/router";

import Select from "../components/Select";

import data from "../bitcoin.json";
import { days, months, years } from "../utils";

const INITIAL_STATE = {
  investment: "",
  day: 10,
  month: "Jan",
  year: 2011,
  todaysRate: 0,
  fireRedirect: false,
};

const Home = () => {
  const [options, updateOptions] = useState(INITIAL_STATE);
  const router = useRouter();

  const setDate = (e) => {
    const period = e.target.name;
    const value = e.target.value;
    updateOptions({
      ...options,
      [period]: value,
    });
  };

  const setInvestment = (e) => {
    updateOptions({
      ...options,
      investment: e.target.value,
    });
  };

  const generateQuery = () => {
    const { day, month, year, investment } = options;
    const date = `${day}-${month}-${year}`;
    const formattedDate = moment(date, "DD-MMM-YYYY").format("YYYY-MM-DD");
    const coins = investment / data[formattedDate];
    const prefs = {};
    prefs.date = formattedDate;
    prefs.coins = coins;
    prefs.investment = investment;

    // Get last item in the object and set the rate.
    const lastDate = Object.keys(data).pop();
    prefs.rate = data[lastDate];
    return queryString.stringify(prefs);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const url = `result?${generateQuery()}`;
    router.push(url);
  };

  return (
    <div className="App font">
      <div id="one">
        $
        <input
          type="tel"
          className="form-control value"
          id="amount"
          onChange={setInvestment}
          value={options.investment}
          placeholder="Amount"
        />{" "}
        in Bitcoin
      </div>
      <div className="two">
        purchased on
        <div className="wrapper">
          <Select name="day" list={days} change={setDate} value={options.day} />
          <Select
            name="month"
            list={months}
            change={setDate}
            value={options.month}
          />
          <Select
            name="year"
            list={years}
            change={setDate}
            value={options.year}
          />
        </div>
      </div>
      <div className="three">would be worth?</div>

      <div>
        <form onSubmit={formSubmit}>
          <input type="submit" className="btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Home;
