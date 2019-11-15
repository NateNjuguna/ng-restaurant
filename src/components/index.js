import angular from 'angular';
import app from './app';
import menu from './menu';
import plate from './plate';
import preLoader from './pre-loader';

const moduleName = 'ng-restaurant.components';

angular.module(moduleName, [
  app,
  menu,
  plate,
  preLoader,
]);

export default moduleName;
