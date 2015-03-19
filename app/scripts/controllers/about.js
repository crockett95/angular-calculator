define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularCalculatorApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularCalculatorApp
   */
  angular.module('angularCalculatorApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
