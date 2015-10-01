import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import ManageSyllabusStore from '../stores/ManageSyllabusStore';
import ManageSyllabusActions from '../actions/ManageSyllabusActions';
import SyllabusItem from '../components/manage-syllabus/SyllabusItem';
import AddItemComponent from '../components/manage-syllabus/AddItemComponent';

@connectToStores
export default class CreateSyllabusPage extends Component {

  static propTypes = {
    // ManageSyllabusStore Props
    syllabusItems: PropTypes.array.isRequired,
  }

  static getStores() {
    return [ManageSyllabusStore];
  }

  static getPropsFromStores() {
    return ManageSyllabusStore.getState();
  }

  render() {
    const { syllabusItems } = this.props;

    return (
      <div className='manage-syllabus'>
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

  addItemAbove(id) {
    ManageSyllabusActions.addItemAbove(id);
  }

  addItemBelow(id) {
    ManageSyllabusActions.addItemBelow(id);
  }
}
