import angular from 'angular';

class Controller {

  _deregisterFunctions = [];
  _latestSubscriptions = {};
  
  constructor($log, $q, $scope) {
    this._logger = $log;
    this._q = $q;
    this._scope = $scope;
  }

  $onDestroy() {
    angular.forEach(this._deregisterFunctions, (deregisterFunction, index) => {
      deregisterFunction();
    });
  }

  $onInit() {
    this.$app.updateTitle('Dashboard');
  }

}
Controller.$inject = [ '$log', '$q', '$scope' ];

export default Controller;