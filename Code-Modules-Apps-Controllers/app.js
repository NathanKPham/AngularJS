/*global angular */
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ["$scope","$timeout",function ($scope, $timeout) {
    
    $scope.name = "Nathan";
    $timeout(function(){$scope.name="Bitch ass"},3000);
    
    
}]);
