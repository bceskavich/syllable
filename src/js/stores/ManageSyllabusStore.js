import findIndex from 'lodash/array/findIndex';
import pullAt from 'lodash/array/pullAt';
import alt from '../alt';
import ManageSyllabusActions from '../actions/ManageSyllabusActions';
import { getItemId } from '../utils/syllabusItemUtils';

class ManageSyllabusStore {
  constructor() {
    this.bindActions(ManageSyllabusActions);

    this.syllabusItems = [
      {
        id: getItemId(),
        text: '<p>Syllabus content goes here</p>',
      },
      {
        id: getItemId(),
        text: '<p>Another syllabus module</p>',
      },
    ];
  }

  getSyllabusItemIndex(id) {
    return findIndex(this.syllabusItems, item => item.id === id);
  }

  onUpdateSyllabusItem(payload) {
    const i = this.getSyllabusItemIndex(payload.id);
    this.syllabusItems[i].text = payload.text;
  }

  onAddSyllabusItem() {
    this.syllabusItems.push({
      id: getItemId(),
      text: '',
    });
  }

  onRemoveSyllabusItem(id) {
    pullAt(this.syllabusItems, findIndex(this.syllabusItems, item => {
      return item.id === id;
    }));
  }

  onMoveItemUp(id) {
    const i = this.getSyllabusItemIndex(id);
    if (i) {
      const temp = this.syllabusItems[i];
      this.syllabusItems[i] = this.syllabusItems[i-1];
      this.syllabusItems[i-1] = temp;
    }
  }

  onMoveItemDown(id) {
    const i = this.getSyllabusItemIndex(id);
    if (i < this.syllabusItems.length - 1) {
      const temp = this.syllabusItems[i];
      this.syllabusItems[i] = this.syllabusItems[i+1];
      this.syllabusItems[i+1] = temp;
    }
  }
}

export default alt.createStore(ManageSyllabusStore, 'ManageSyllabusStore');
