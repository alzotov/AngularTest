'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.persons',
  'myApp.view2',
  'myApp.issuers',
  'myApp.version',
  'myApp.services'  
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/view1'});
}])
;