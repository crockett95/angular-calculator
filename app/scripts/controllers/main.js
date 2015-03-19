define(['angular', 'lodash'], function (angular, _) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularCalculatorApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularCalculatorApp
   */
  angular.module('angularCalculatorApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      var num = function (val) { return 1 * val; },
          isNum = function (val) {
            return !_.isUndefined(num(val)) && !_.isNaN(num(val)) && _.isNumber(num(val));
          };

      $scope.inputsValid = function () {
        return isNum($scope.a) && isNum($scope.b) && isNum($scope.c);
      };

      $scope.expression = function () {
        if (!$scope.inputsValid()) {
          return '';
        }

        return '\\begin{array}{*{20}c} {x = \\frac{{ - (' + $scope.b +
          ') \\pm \\sqrt {(' + $scope.b + ')^2 - 4 * ' + $scope.a + ' * ' + $scope.c +
          '} }}{{2' + $scope.a + '}}} & {{\\rm{when}}} & {' + $scope.a +
          'x^2 + ' + $scope.b + 'x + ' + $scope.c + ' = 0} \\\\ \\end{array}';
      };

      $scope.result = function () {
        if (!$scope.inputsValid()) {
          return 'Invalid inputs';
        }

        var a = num($scope.a),
            b = num($scope.b),
            c = num($scope.c),
            discriminant = b * b - 4 * a * c,
            solutionA, solutionB;

        if (a === 0) {
          return '<strong>a</strong> cannot be zero';
        } else if (0 > discriminant) {
          return 'There are no real solutions';
        } else if (0 === discriminant) {
          solutionA = -b / (2 * a);

          return 'There is a single solution at <strong>' + solutionA + '</strong>';
        } else {
          solutionA = (-b + Math.sqrt(discriminant)) / (2 * a);
          solutionB = (-b - Math.sqrt(discriminant)) / (2 * a);
          return 'There are solutions at ' +
            '<strong>' + solutionA + '</strong> and ' +
            '<strong>' + solutionB + '</strong>';
        }
      };
    });
});
