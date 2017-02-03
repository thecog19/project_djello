
var Jello = angular.module('Jello', ['ui.router', 'restangular', 'Devise'])
                   .constant('_', window._);

// CSRF config
Jello.config(
  [ '$httpProvider',
  function($httpProvider){
    var token = angular.element('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }])

// Devise config
Jello.config(
  ['AuthProvider',

  function(AuthProvider) {
    AuthProvider.loginPath('/users/sign_in.json');
    AuthProvider.loginMethod('POST');
    AuthProvider.resourceName('users');
  }

]);

// Restangular config
Jello.config(
  ['RestangularProvider',

    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          'content-type': 'application/json'
      });
    }

]);

Jello.config(
  ['$stateProvider', '$urlRouterProvider',
  
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('')

    // $stateProvider.state()
  }])