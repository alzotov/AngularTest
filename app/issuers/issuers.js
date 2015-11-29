'use strict';

angular.module('myApp.issuers', ['ngRoute','base64'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/issuers', {
    templateUrl: 'issuers/issuers.html',
    controller: 'IssuersCtrl'
  });
}])

.controller('IssuersCtrl', ['$scope','$http','$base64',function($scope,$http,$base64) {

    var credentials = 'Administrator:123';
    console.log(credentials);
    var encoded = $base64.encode(credentials);  
    console.log(encoded);
    $scope.allIssuers = {content:null};
    $http.defaults.headers.common['Authorization'] = 'Basic '+encoded;
        $http.get('http://env-5542790.jelastic.regruhosting.ru/loyalty/api/v1/subject/issuer').success(
        function(data) {
            $scope.allIssuers = data;
            console.log(JSON.stringify($scope.allIssuers));        
    });                         

}])

;