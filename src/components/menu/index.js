import angular from 'angular';
import ngMaterial from 'angular-material';
import controller from './controller';
import template from './template.html';
import './style.css';

const moduleName = 'ng-restaurant.components.menu';

angular.module(moduleName, [ ngMaterial ]).component('nrMenu', {
  controller,
  require: {
    $app: '^lmApp',
  },
  template,
});

export default moduleName;
