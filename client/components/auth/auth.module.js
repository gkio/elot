'use strict';

angular.module('elottyApp.auth', [
  'elottyApp.constants',
  'elottyApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
