import React, { Component } from 'react';

let Analyze = (WrappedComponent, pageName) => class extends Component {
  static willTransitionTo(transition) {
    ga('send', 'pageview', {
      page: transition.path,
      name: pageName
    });
  }

  sendEvent(type, action, label) {
    ga('send', 'event', type, action, label);
  }

  render() {
    return (
      <WrappedComponent
        {...this.props}
        sendEvent={this.sendEvent}
      />
    );
  }
}

export default Analyze;
