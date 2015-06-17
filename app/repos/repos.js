'use strict';

angular.module('myApp.repos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/repos', {
    templateUrl: 'repos/repos.html',
    controller: 'ReposCtrl'
  });
}])

.controller('ReposCtrl', function($scope, getRepos, passUserName) {

  //get user_name from passUserName service
  $scope.user_name = passUserName.getUserName();
  
  // GET REPO INFO FOR USER_NAME
  var getUserRepos = function(user_name) {
    getRepos.getUserRepos(user_name)
      .success(function(data){
        $scope.repos = data;
      })
      .error(function() {
        alert('Cant Get User Repos!');
      });
    };

  $scope.var1 = getUserRepos($scope.user_name); 
});
