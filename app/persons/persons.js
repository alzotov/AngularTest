'use strict';

angular.module('myApp.persons', ['ngRoute','base64'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/persons', {
        templateUrl: 'persons/persons.html',
        controller: 'PersonsCtrl'
      });
    }])
    //.controller('View1Ctrl', ['$scope','PersonFactory','$http','$base64',function($scope,PersonFactory,$http,$base64) {
    .controller('PersonsCtrl', ['$scope','$http','$base64',function($scope,$http,$base64) {
        //$scope.allPersons = PersonFactory.getAllPersons().data;

    var credentials = 'Administrator:123';
    console.log(credentials);
    var encoded = $base64.encode(credentials);
    console.log(encoded);
    $scope.allPersons = {content:null};
    $http.defaults.headers.common['Authorization'] = 'Basic '+encoded;
    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //$http.get('http://env-5542790.jelastic.regruhosting.ru/loyalty/api/v1/subject/merchants')
    $http.get('http://env-5542790.jelastic.regruhosting.ru/loyalty/api/v1/subject/person').success(
        function(data) {
            // you can do some processing here
            $scope.allPersons = data;
            //$scope.allPersons
            console.log(JSON.stringify($scope.allPersons));
//          console.log($scope.allPersons);
//            var output = '';
//                for (var property in $scope.allPersons) {
//                  output += property + ': ' + $scope.allPersons[property]+'; ';
//                }
//            console.log(output);            
    });    
    }]);



