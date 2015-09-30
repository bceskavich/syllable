import React, { Component, PropTypes } from 'react';

export default class SyllabusItemControls extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
  }

  render() {
    const { onRemove } = this.props;

    return (
      <ul className='manage-syllabus-item__controls'>
        <li>V</li>
        <li>^</li>
        <li onClick={onRemove}>X</li>
      </ul>
    );
  }
}
