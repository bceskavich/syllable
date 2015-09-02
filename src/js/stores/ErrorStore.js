import alt from '../alt';
import ErrorActions from '../actions/ErrorActions';

class ErrorStore {
  constructor() {
    this.bindActions(ErrorActions);

    this.error = '';
  }

  onSetError(error) {
    this.error = error;
  }

  onClearError() {
    this.error = '';
  }
}

export default alt.createStore(ErrorStore, 'ErrorStore');
