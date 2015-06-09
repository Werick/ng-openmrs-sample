'use strict';

/**
 * @ngdoc overview
 * @name ngOpenmrsSampleApp
 * @description
 * # ngOpenmrsSampleApp
 *
 * Main module of the application.
 */
angular
  .module('ngOpenmrsSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  /*

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
*/

  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          authenticate: false,
          controller: 'MainCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          authenticate: true,
          controller: 'AboutCtrl'
        })
      $urlRouterProvider.otherwise('/');
    }])

  .run(['$rootScope', '$state','AuthService',
    function ($rootScope, $state,Auth) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        console.log(toState);
        console.log(Auth.isAuthenticated());

        if (toState.authenticate && !Auth.isAuthenticated()) {
          // User isn’t authenticated
          $state.transitionTo('main');
          event.preventDefault();
          console.log(toState);
        }
       // if (toState.url == '/logout') {
       //   Auth.logout();
       // }
      });
    }]);
/*
  .run(['$http','$rootScope','$location',function($http,$rootScope,$location) {
    if($rootScope.authdata == 'undefined')
    {
      $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.authdata
    }

  }]);
*/
