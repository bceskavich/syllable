import React, { Component, } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home-container'>
          <h1 className='home__title'>Syllable</h1>
          <h3 className='home__subtitle'>
            Responsive, interactive syllabi for the modern web. Coming soon...
          </h3>
        </div>
      </div>
    );
  }
}
