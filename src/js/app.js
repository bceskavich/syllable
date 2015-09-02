import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import merge from 'lodash/object/merge';
import connectToStores from 'alt/utils/connectToStores';
import AppStore from './stores/AppStore';
import ErrorStore from './stores/ErrorStore';

@connectToStores
export default class App extends Component {

  static getStores() {
    return [AppStore, ErrorStore];
  }

  static getPropsFromStores() {
    return merge(AppStore.getState(), ErrorStore.getState());
  }

  render() {
    return (
      <div className='body'>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
