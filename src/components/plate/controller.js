import angular from 'angular';

class Controller {

  _deregisterFunctions = [];
  plate = [];
  
  constructor($log, $q, $scope) {
    this._logger = $log;
    this._q = $q;
    this._scope = $scope;
  }

  closeSidenav() {
    this.$app.closeSidenav();
  }

}
Controller.$inject = [ '$log', '$q', '$scope' ];

export default Controller;