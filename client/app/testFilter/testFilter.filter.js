'use strict';

angular.module('test')
  .filter('testFilter', function () {
    return function (input) {
      return 'testFilter filter: ' + input;
    };
  });
