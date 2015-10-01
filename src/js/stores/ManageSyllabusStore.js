import findIndex from 'lodash/array/findIndex';
import pullAt from 'lodash/array/pullAt';
import alt from '../alt';
import ManageSyllabusActions from '../actions/ManageSyllabusActions';
import { getItemId } from '../utils/syllabusItemUtils';

class ManageSyllabusStore {
  constructor() {
    this.bindActions(ManageSyllabusActions);

    this.syllabusTitle = {
      title: '',
      school: '',
      semester: '',
    };
    this.syllabusItems = [
      {
        id: getItemId(),
        text: '<p>Add your content here</p>',
      },
      {
        id: getItemId(),
        text: '<p>Add your content here</p>',
      },
    ];
  }

  getSyllabusItemIndex(id) {
    return findIndex(this.syllabusItems, item => item.id === id);
  }

  onUpdateSyllabusTitle(payload) {
    this.syllabusTitle[payload.key] = payload.value;
  }

  onUpdateSyllabusItem(payload) {
    const i = this.getSyllabusItemIndex(payload.id);
    this.syllabusItems[i].text = payload.text;
  }

  onAddItemAbove(id) {
    const i = this.getSyllabusItemIndex(id);
    this.syllabusItems.splice(i, 0, {
      id: getItemId(),
      text: '<p>Add your content here</p>',
    });
  }

  onAddItemBelow(id) {
    const i = this.getSyllabusItemIndex(id);
    this.syllabusItems.splice(i + 1, 0, {
      id: getItemId(),
      text: '<p>Add your content here</p>'
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
