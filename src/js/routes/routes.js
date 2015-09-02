import React from 'react';
import { Route } from 'react-router';
import App from '../app';
import HomePage from '../pages/HomePage';

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route handler={HomePage} />
  </Route>
);

export default routes;
