import React from 'react';
import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from '../app';
import HomePage from '../pages/HomePage';

const router = (
  <Router history={new BrowserHistory()}>
    <Route component={App}>
      <Route path='/' component={HomePage} />
    </Route>
  </Router>
);

export default router;
