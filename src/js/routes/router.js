import React from 'react';
import { Route, Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from '../app';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';
import CreateSyllabusPage from '../pages/CreateSyllabusPage';
import TestQueries from './TestRoute';

const router = (
  <Router history={new createBrowserHistory()}>
    <Route component={App}>
      <Route path='/' component={HomePage} />
      <Route path='/create-syllabus' component={CreateSyllabusPage} />
    </Route>
  </Router>
);

export default router;
