/*jshint unused: vars */
define([
  'angular',
'controllers/main',
'controllers/about',
'directives/calcreal',
'directives/calcmathjax',
'angular-route',
'angular-sanitize'
]/*deps*/, function (angular, MainCtrl, AboutCtrl, CalcRealDirective, CalcMathjaxDirective)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularCalculatorApp
   * @description
   * # angularCalculatorApp
   *
   * Main module of the application.
   */
  return angular
    .module('angularCalculatorApp', ['angularCalculatorApp.controllers.MainCtrl',
'angularCalculatorApp.controllers.AboutCtrl',
'angularCalculatorApp.directives.CalcReal',
'angularCalculatorApp.directives.CalcMathjax',
/*angJSDeps*/
    'ngRoute',
    'ngSanitize'
  ])
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
    });
});
