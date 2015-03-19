/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: calcMathjax', function () {

    // load the directive's module
    beforeEach(module('angularCalculatorApp.directives.CalcMathjax'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<calc-mathjax></calc-mathjax>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the calcMathjax directive');
    }));
  });
});
