const config = ($locationProvider, $logProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) => {

    $locationProvider.html5Mode(process.env.NODE_ENV === 'production').hashPrefix('!');
  
    $logProvider.debugEnabled(process.env.NODE_ENV !== 'production');
  
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('blue-grey')
      .warnPalette('red')
      .backgroundPalette('grey');
  
    $stateProvider
      .state('app', {
        abstract: true,
        component: 'nrApp',
        url: '/app',
      })
      .state('app.dashboard', {
        url: '/dashboard/',
        views: {
          app: {
            component: 'nrDashboard'
          }
        }
      })
      .state('pre-loader', {
        component: 'nrPreLoader',
        url: '/',
      });
    
    $urlRouterProvider.otherwise('/');
  
  };
  config.$inject = [ '$locationProvider', '$logProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider' ];
  
  export default config;
  