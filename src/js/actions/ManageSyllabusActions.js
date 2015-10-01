import alt from '../alt';

class ManageSyllabusActions {
  constructor() {
    this.generateActions(
      'updateSyllabusItem',
      'updateSyllabusTitle',
      'removeSyllabusItem',
      'moveItemUp',
      'moveItemDown',
      'addItemAbove',
      'addItemBelow'
    );
  }
}

export default alt.createActions(ManageSyllabusActions);
