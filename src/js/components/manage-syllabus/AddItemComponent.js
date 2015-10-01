import React, { Component, PropTypes } from 'react';

export default class AddItemComponent extends Component {

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  }

  render() {
    const { addItem } = this.props;
    return (
      <div className='manage-syllabus__add'>
        <i
          className='fa fa-plus'
          onClick={addItem}></i>
      </div>
    );
  }
}
