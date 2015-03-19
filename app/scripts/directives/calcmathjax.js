define(['angular', 'MathJax'], function (angular, MathJax) {
  'use strict';

  MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: 'none',
    'HTML-CSS': {
        showMathMenu: false
    }
  });
  MathJax.Hub.Configured();

  /**
   * @ngdoc directive
   * @name angularCalculatorApp.directive:calcMathjax
   * @description
   * # calcMathjax
   */
  angular.module('angularCalculatorApp.directives.CalcMathjax', [])
    .directive('calcMathjax', function () {
      return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
          $scope.$watch($attrs.calcMathjax, function(value) {
            var $script = angular.element('<script type=\'math/tex\'>');

            $script.html(value || '');
            $element.html('');
            $element.append($script);
            MathJax.Hub.Queue(['Reprocess', MathJax.Hub, $element[0]]);
          });
        }
      };
    });
});
