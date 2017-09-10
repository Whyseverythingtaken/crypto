/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/
/* eslint-disable react/jsx-filename-extension */


import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Result from './Pages/Result';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/result" component={Result} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;