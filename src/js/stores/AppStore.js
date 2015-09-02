import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);

    this.loggedIn = false;
  }

  onUpdateAuthState(state) {
    localStorage.setItem('briefcaseAuth', state);
    this.loggedIn = state;
  }

  static isLoggedIn() {
    const { loggedIn } = this.getState();
    return loggedIn;
  }

  static checkCachedToken() {
    return localStorage.getItem('briefcaseAuth') === 'true' ? true : false;
  }
}

export default alt.createStore(AppStore, 'AppStore');
