import angular from 'angular';
import user from '../../data/user';

const moduleName = 'lean-meals.services.auth';
class Service {

  constructor($log, $rootScope, $session, $window) {
    this._logger = $log;
    this._rootScope = $rootScope;
    this._session = $session;
    this._window = $window;
  }

  _decode(str) {
    return this._window.atob(str);
  }

  _encode(str) {
    return this._window.btoa(str);
  }

  start() {
    this._rootScope.$emit('authenticating');
    this._session.getObjectAsync('user').catch((err) => {
      this._logger.debug(err);
      this._session.setObject('user', this._encode(user));
        
    }).finally(() => {
      this._rootScope.$emit('authenticated');
    });
  }

  user() {
    return user;
  }

}
Service.$inject = [ '$log', '$rootScope', '$session', '$window' ];

angular.module(moduleName, []).service('$auth', Service);

export default moduleName;
