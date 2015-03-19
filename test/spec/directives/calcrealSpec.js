/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: calcReal', function () {

    // load the directive's module
    beforeEach(module('angularCalculatorApp.directives.CalcReal'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<calc-real></calc-real>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the calcReal directive');
    }));
  });
});
