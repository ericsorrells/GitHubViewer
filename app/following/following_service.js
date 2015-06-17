'use strict';

angular.module('myApp')
.service('getFollowing', function($http) {

  this.getFollowing = function(user_name){
    console.log("FOLLOWING_SERVICE - UserName: " + user_name);
    return $http.get("https://api.github.com/users/" + user_name + "/following");
  };

});