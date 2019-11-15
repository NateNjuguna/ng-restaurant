import angular from 'angular';
import ngMaterial from 'angular-material';
import controller from './controller';
import template from './template.html';

const moduleName = 'ng-restaurant.components.app';

angular.module(moduleName, [ ngMaterial ]).component('nrApp', {
  controller,
  template
});

export default moduleName;
