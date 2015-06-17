'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, getUser, passUserName) {

  $scope.getUserInfo = function(user_name) {
    //call getUser service
    getUser.getUserInfo(user_name)
    .success(function(data){
      $scope.user = data;
      //send info to passUserName service
      passUserName.setUserName($scope.user.login);
      console.log("DATA: " + user_name);
    })
    .error(function() {
      alert('Cant Get User Data!');
    });
  }

});