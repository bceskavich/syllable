import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions('updateAuthState');
  }
}

export default alt.createActions(AppActions);
