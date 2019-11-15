import angular from 'angular';
import $auth from './auth';
import $session from './session';

const moduleName = 'ng-restaurant.services';

angular.module(moduleName, [
  $auth,
  $session,
]);

export default moduleName;
