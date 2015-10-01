import alt from '../alt';

class ManageSyllabusActions {
  constructor() {
    this.generateActions(
      'updateSyllabusItem',
      'removeSyllabusItem',
      'moveItemUp',
      'moveItemDown',
      'addItemAbove',
      'addItemBelow'
    );
  }
}

export default alt.createActions(ManageSyllabusActions);
