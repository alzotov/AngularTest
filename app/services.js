'use strict';
var services = angular.module('myApp.services', ['ngResource','base64']);

//services.factory('PersonFactory', ['$resource','$base64',function ($resource,$base64) {
//    var credentials = 'Administrator:123';
//    console.log(credentials);
//    var encoded = $base64.encode(credentials);
//    console.log(encoded);
//    return $resource('http://env-5542790.jelastic.regruhosting.ru/loyalty/api/v1/subject/persons', {}, {
//        getAllPersons:
//        {
//            method: 'GET',
//            params: {},
//            isArray: false,
//            headers: { 'Authorization': 'Basic QWRtaW5pc3RyYXRvcjoxMjM=',
//                       'Access-Control-Allow-Origin': '*'}
//            //headers: { 'Authorization': 'Basic #{encoded}' }
//            //headers: { 'Authorization': 'Basic Administrator:123' }
//        }
//    }).save();
//}]);

