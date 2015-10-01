import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import ManageSyllabusStore from '../stores/ManageSyllabusStore';
import ManageSyllabusActions from '../actions/ManageSyllabusActions';
import SyllabusItem from '../components/manage-syllabus/SyllabusItem';
import AddItemComponent from '../components/manage-syllabus/AddItemComponent';
import TitleComponent from '../components/manage-syllabus/TitleComponent';

@connectToStores
export default class CreateSyllabusPage extends Component {

  static propTypes = {
    // ManageSyllabusStore Props
    syllabusTitle: PropTypes.object.isRequired,
    syllabusItems: PropTypes.array.isRequired,
  }

  static getStores() {
    return [ManageSyllabusStore];
  }

  static getPropsFromStores() {
    return ManageSyllabusStore.getState();
  }

  render() {
    const { syllabusItems, syllabusTitle } = this.props;

    return (
      <div className='manage-syllabus'>
        <TitleComponent
          titleInfo={syllabusTitle}
          onUpdate={this.updateSyllabusTitle.bind(this)}
        />
        {
          syllabusItems.map((item, index) => {
            return (
              <span key={index}>
                <AddItemComponent
                  addItem={this.addItemAbove.bind(this, item.id)}
                />
                <SyllabusItem
                  id={item.id}
                  text={item.text}
                  onEditorChange={this.updateSyllabusItem.bind(this, item.id)}
                  onRemove={this.removeSyllabusItem.bind(this, item.id)}
                  onMoveDown={this.moveItemDown.bind(this, item.id)}
                  onMoveUp={this.moveItemUp.bind(this, item.id)}
                />
                <AddItemComponent
                  addItem={this.addItemBelow.bind(this, item.id)}
                />
              </span>
            );
          })
        }
      </div>
    );
  }

  updateSyllabusTitle(key, value) {
    ManageSyllabusActions.updateSyllabusTitle({ key, value, });
  }

  updateSyllabusItem(id, text) {
    ManageSyllabusActions.updateSyllabusItem({ id, text, });
  }

  addItemAbove(id) {
    ManageSyllabusActions.addItemAbove(id);
  }

  addItemBelow(id) {
    ManageSyllabusActions.addItemBelow(id);
  }

  removeSyllabusItem(id) {
    ManageSyllabusActions.removeSyllabusItem(id);
  }

  moveItemDown(id) {
    ManageSyllabusActions.moveItemDown(id);
  }

  moveItemUp(id) {
    ManageSyllabusActions.moveItemUp(id);
  }
}
