import React, { Component, PropTypes } from 'react';

export default class TitleComponent extends Component {

  static propTypes = {
    titleInfo: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  render() {
    const { titleInfo } = this.props;

    return (
      <div className='manage-syllabus-item'>
        <input
          type='text'
          className='manage-syllabus-item__title'
          value={titleInfo.title}
          placeholder='Course Title'
          onChange={this.onChange.bind(this, 'title')}
        />
        <input
          type='text'
          className='manage-syllabus-item__sub-title'
          value={titleInfo.school}
          placeholder='College / University'
          onChange={this.onChange.bind(this, 'school')}
        />
        <input
          type='text'
          className='manage-syllabus-item__sub-title'
          value={titleInfo.semester}
          placeholder='Semester / Quarter'
          onChange={this.onChange.bind(this, 'semester')}
        />
      </div>
    );
  }

  onChange(key, event) {
    const { onUpdate } = this.props;
    onUpdate(key, event.target.value);
  }
}
