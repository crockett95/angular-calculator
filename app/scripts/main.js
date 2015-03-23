/*jshint unused: vars */
require.config({
  paths: {
    'angular' : '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-touch': '../bower_components/angular-touch/angular-touch',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'jquery': '../bower_components/jquery/dist/jquery',
    'lodash': '../bower_components/lodash/lodash',
    'MathJax': '../bower_components/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
    'underscore.string' : '../bower_components/underscore.string/dist/underscore.string'
  },
  shim: {
    'angular' : {
      deps: ['jquery'],
      'exports' : 'angular'
    },
    'angular-route': ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate': ['angular'],
    'angular-touch': ['angular'],
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    },
    'MathJax': {
      exports: 'MathJax'
    }
  },
  priority: [
    'angular'
  ]
});

require([
  'angular',
  'app',
], function(angular, app) {
  'use strict';

  angular.bootstrap(document.body, [app.name]);
});
