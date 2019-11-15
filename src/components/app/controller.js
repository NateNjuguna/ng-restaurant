import angular from 'angular';

class Controller {

  isLoading = true;
  lmTitle = '';

  constructor($element, $log, $mdSidenav, $mdToast, $scope, $timeout) {
    this._element = $element;
    this._logger = $log;
    this._mdSidenav = $mdSidenav;
    this._mdToast = $mdToast;
    this._scope = $scope;
    this._timeout = $timeout;
  }

  $onInit() {
    this.toggleLeft = this._buildDelayedToggler('right');
  }

  $postLink() {
    this._element.addClass('layout-fill layout-row');
  }

  _buildDelayedToggler(navID) {
    return this._debounce(() => {
      this._mdSidenav(navID)
        .toggle()
        .then(() => {
          this._logger.debug("toggle " + navID + " is done");
        });
    }, 200);
  }
  
  _debounce(func, wait, context) {
    let timer;

    return () => {
      const context = this._scope;
      const args = Array.prototype.slice.call(arguments);
      this._timeout.cancel(timer);
      timer = this._timeout(() => {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  _deregisterFABAction() {
    this.contentHasFAB = false;
    this.fabAction = angular.noop;
  }

  _showToast(msg) {
    this._mdToast.showSimple(msg);
  }
  
  closeSidenav() {
    this._mdSidenav('right').close()
      .then(() => {
        this._logger.debug("close RIGHT is done");
      });
  }

  hasNavChildren(link) {
    return angular.isObject(link);
  }

  onLoadStateChanged(status) {
    this.isLoading = status;
  }

  updateTitle(title) {
    this._scope.$root.title = `Lean Meals | ${title}`;
    this.lmTitle = title;
  }

}
Controller.$inject = [ '$element', '$log', '$mdSidenav', '$mdToast', '$scope', '$timeout' ];

export default Controller;