import alt from '../alt';

class ManageSyllabusActions {
  constructor() {
    this.generateActions(
      'updateSyllabusItem',
      'addSyllabusItem',
      'removeSyllabusItem',
      'moveItemUp',
      'moveItemDown'
    );
  }
}

export default alt.createActions(ManageSyllabusActions);
