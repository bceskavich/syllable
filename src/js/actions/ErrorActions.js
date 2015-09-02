import alt from '../alt';

class ErrorActions {
  constructor() {
    this.generateActions(
      'setError',
      'clearError'
    );
  }
}

export default alt.createActions(ErrorActions);
