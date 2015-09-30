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
        text: 'Syllabus content goes here',
      },
      {
        id: getItemId(),
        text: 'Another syllabus module',
      },
    ];
  }

  onUpdateSyllabusItem(payload) {
    const i = findIndex(this.syllabusItems, item => item.id === payload.id);
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
}

export default alt.createStore(ManageSyllabusStore, 'ManageSyllabusStore');
