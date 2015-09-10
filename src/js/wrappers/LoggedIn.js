import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import AppStore from '../../stores/AppStore';

export default class LoggedIn extends Component {

  static willTransitionTo(transition) {
    if (!AppStore.isLoggedIn()) {
      transition.redirect('home');
    }
  }

  render() {
    return <RouteHandler {...this.props} />;
  }
}
