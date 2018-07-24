
let todoApp = angular.module('todoApp', ['ngRoute','ngResource']);

todoApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.htm',
        controller: 'mainController'
    })
    .when('/todoHome', {
        templateUrl: 'pages/todoHome.htm',
        controller: 'todoHomeController'
    })
    .when('/todo',{

        templateUrl: 'pages/todo.htm',
        controller: 'todoController'
    })
    .when("/practice",{
        templateUrl: 'pages/practice.htm',
        controller: 'practiceController'
    })

});

// CONTROLLERS
todoApp.controller('mainController',["$scope","$resource", function($scope, $resource){
    $scope.quoteAPI =
    $resource("https://random-quote-generator.herokuapp.com/api/quotes/random",{get: {method:"JSONP"}});
    $scope.quoteResult = $scope.quoteAPI.get({});
    console.log($scope.quoteResult);
}]);
todoApp.controller("todoController", ["$scope",'todoService', function($scope, todoService){

    $scope.list=todoService.list;
    $scope.input = "";
    $scope.addToList = function(){
        $scope.list.push($scope.input);
        $scope.input="";
    }
    
}]);

todoApp.controller("todoHomeController", ["$scope", "todoService", function($scope, todoService){
    $scope.list = todoService.list;
    $scope.finishedList = todoService.finishedList;
    $scope.removeListing = function(x){
        let oldList = todoService.list;
        $scope.list = [];
        angular.forEach(oldList, function(c){
            if(c != x) $scope.list.push(c);
            else $scope.finishedList.push(c);
        })
        todoService.list = $scope.list;
        todoService.finishedList = $scope.finishedList;
    }
    $scope.removeFinishedItem = function(x){
        let oldList = todoService.finishedList;
        $scope.finishedList = [];
        angular.forEach(oldList, function(c){
            if(c != x) $scope.finishedList.push(c);
        })
        todoService.finishedList = $scope.finishedList;
    }

}]);
todoApp.controller('practiceController', function(){


});

todoApp.service("todoService", function(){
    let serviceList = this.list = [];
    this.finishedList = [];

});
