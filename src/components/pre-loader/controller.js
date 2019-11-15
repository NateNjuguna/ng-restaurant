import angular from 'angular';

class Controller {

  _eventDestroyers = [];

  constructor($auth, $element, $rootScope, $state) {
    this._auth = $auth;
    this._element = $element;
    this._rootScope = $rootScope;
    this._state = $state;
  }

  $onDestroy() {
    angular.forEach(this._eventDestroyers, (destroyer) => {
      destroyer();
    });
  }

  $postLink() {
    this._element.addClass('layout-align-space-around-center layout-column layout-fill');
  }

  $onInit() {
    this._eventDestroyers.push(this._rootScope.$on('authenticated', () => {
      this._root.title = 'NG Restaurant | Redirecting...';
      this.redirect();
    }));
  }

  redirect() {
    this._state.go('app.dashboard', null, {
      location: 'replace',
    });
  }

}
Controller.$inject = [ '$auth', '$element', '$rootScope', '$state' ];

export default Controller;
