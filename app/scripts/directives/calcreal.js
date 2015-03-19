define(['angular'], function (angular) {
  'use strict';

  var REAL_NUM_REGEXP = /^-?(?:\d+\.?|\d*\.\d+)$/;

  /**
   * @ngdoc directive
   * @name angularCalculatorApp.directive:calcReal
   * @description
   * # calcReal
   */
  angular.module('angularCalculatorApp.directives.CalcReal', [])
    .directive('calcReal', function () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function postLink(scope, element, attrs, ctrl) {
          ctrl.$validators.calcReal = function (modelVal, viewVal) {
            if (ctrl.$isEmpty(modelVal) || REAL_NUM_REGEXP.test(viewVal)) {
              return true;
            }

            return false;
          };
        }
      };
    });
});
