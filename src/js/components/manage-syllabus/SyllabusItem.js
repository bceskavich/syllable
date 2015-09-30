import React, { Component, PropTypes } from 'react';
import Editor from 'react-medium-editor';
import ManageSyllabusActions from '../../actions/ManageSyllabusActions';
import mediumEditorOptions from '../../utils/mediumEditorOptions';

export default class SyllabusItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <Editor
          text={text}
          onChange={this.onEditorChange.bind(this)}
          options={mediumEditorOptions}
        />
      </div>
    );
  }

  onEditorChange(text) {
    const { id } = this.props;
    ManageSyllabusActions.updateSyllabusItem({ id, text, });
  }

  onRemove() {
    const { id } = this.props;
    ManageSyllabusActions.removeSyllabusItem(id);
  }
}
