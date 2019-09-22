console.info("index.js")
define(['angularAMD'],function(angularAMD){
var app = angular.module('todoApp', []);
return angularAMD.bootstrap(app);
app.controller('todoController', function($scope){
        $scope.tasks = [];
        $scope.add = function() {
            $scope.tasks.push($scope.title);
        }
});
});
define(['ng_logic/index'],function(app){

});
/*
.controller('todoController', function($scope){
        $scope.tasks = [];
        $scope.add = function() {
            $scope.tasks.push($scope.title);
        }
*/