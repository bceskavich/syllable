import React, { Component } from 'react';
// import Relay from 'react-relay';

class TestPage extends Component {
  render() {
    return <div>{this.props.viewer}</div>;
  }
}

/*
export default Relay.createContainer(TestPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        syllabi(first: 10) {
          edges {
            node {
              id,
              title,
              description
            }
          }
        }
      }
    `
  }
});
*/
