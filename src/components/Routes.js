import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import NotFound from '../pages/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/wallet" component={ Wallet } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </main>
      </div>
    );
  }
}
