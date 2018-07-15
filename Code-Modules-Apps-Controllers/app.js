/*global angular */
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ["$scope","$log",function ($scope,$log) {
    
    
    $scope.handle = '';
    $log.info($scope.handle);
    
}]);
