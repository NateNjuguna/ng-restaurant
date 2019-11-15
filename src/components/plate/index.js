import angular from 'angular';
import ngMaterial from 'angular-material';
import controller from './controller';
import template from './template.html';

const moduleName = 'ng-restaurant.components.plate';

angular.module(moduleName, [ ngMaterial ]).component('nrPlate', {
  controller,
  require: {
    $app: '^nrApp',
  },
  template,
});

export default moduleName;
