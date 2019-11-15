import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';
import components from './components';
import config from './config';
import run from './run';
import services from './services';
import '../node_modules/angular-material/angular-material.min.css';
import './style.css';

angular.module(
  'ng-restaurant',
  [
    ngMaterial,
    ngMessages,
    uiRouter,
    components,
    filters,
    services,
  ],
  config
).run(run);

angular.element(() => {
  angular.bootstrap(document, ['ng-restaurant'], {
    strictDi: true
  });
});
