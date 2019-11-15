import angular from 'angular';

class Controller {

  _deregisterFunctions = [];
  
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
    this.$app.updateTitle('Menu');
  }

}
Controller.$inject = [ '$log', '$q', '$scope' ];

export default Controller;