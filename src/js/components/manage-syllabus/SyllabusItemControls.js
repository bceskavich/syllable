import React, { Component, PropTypes } from 'react';

export default class SyllabusItemControls extends Component {

  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
  }

  render() {
    const { onRemove, moveDown, moveUp } = this.props;

    return (
      <ul className='manage-syllabus-item__controls'>
        <li onClick={moveDown}><i className='fa fa-chevron-down'></i></li>
        <li onClick={moveUp}><i className='fa fa-chevron-up'></i></li>
        <li onClick={onRemove}><i className='fa fa-trash-o'></i></li>
      </ul>
    );
  }
}
