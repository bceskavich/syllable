import React, { Component, PropTypes } from 'react';
import Editor from 'react-medium-editor';
import ManageSyllabusActions from '../../actions/ManageSyllabusActions';
import mediumEditorOptions from '../../utils/mediumEditorOptions';
import SyllabusItemControls from './SyllabusItemControls';

export default class SyllabusItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onEditorChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onMoveDown: PropTypes.func.isRequired,
    onMoveUp: PropTypes.func.isRequired,
  }

  render() {
    const {
      text,
      id,
      onEditorChange,
      onRemove,
      onMoveDown,
      onMoveUp
    } = this.props;

    return (
      <div className='manage-syllabus-item'>
        <SyllabusItemControls
          id={id}
          onRemove={onRemove}
          moveDown={onMoveDown}
          moveUp={onMoveUp}
        />
        <Editor
          className='manage-syllabus-item__input'
          text={text}
          onChange={onEditorChange}
          options={mediumEditorOptions}
        />
      </div>
    );
  }
}
