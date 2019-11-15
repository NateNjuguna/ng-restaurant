import angular from 'angular';
import ngMaterial from 'angular-material';
import controller from './controller';
import template from './template.html';

const moduleName = 'ng-restaurant.components.pre-loader';

angular.module(moduleName, [ ngMaterial ]).component('nrPreLoader', {
  controller,
  template,
});

export default moduleName;
