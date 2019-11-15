import angular from 'angular';
import $api from './api';
import $session from './session';

const moduleName = 'ng-restaurant.services';

angular.module(moduleName, [
  $api,
  $session,
]);

export default moduleName;
