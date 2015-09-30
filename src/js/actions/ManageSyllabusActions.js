import alt from '../alt';

class ManageSyllabusActions {
  constructor() {
    this.generateActions(
      'updateSyllabusItem',
      'addSyllabusItem',
      'removeSyllabusItem'
    );
  }
}

export default alt.createActions(ManageSyllabusActions);
