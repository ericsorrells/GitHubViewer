'use strict';

angular.module('myApp.followers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/followers', {
    templateUrl: 'followers/followers.html',
    controller: 'FollowersCtrl'
  });
}])

.controller('FollowersCtrl', function($scope, getFollowers, passUserName) {

  //get user_name from passUserName service
  $scope.user_name = passUserName.getUserName();
  
  // GET REPO INFO FOR USER_NAME
  var getFollowersInfo = function(user_name) {
    getFollowers.getFollowers(user_name)
      .success(function(data){
        $scope.followers = data;
      })
      .error(function() {
        alert('Cant Get Followers Info!');
      });
    };

  $scope.var1 = getFollowersInfo($scope.user_name); 
});
