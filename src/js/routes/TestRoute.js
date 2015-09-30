import React from 'react';
// import Relay from 'react-relay';

const TestQueries = {
  viewer: (Component) => {
    return (Relay.QL`
    query Root {
      viewer {
        ${Component.getFragment('viewer')}
      }
    }
  `);
}};

export default TestQueries;
