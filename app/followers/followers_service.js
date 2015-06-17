'use strict';

angular.module('myApp')
.service('getFollowers', function($http) {

  this.getFollowers = function(user_name){
    console.log("FOLLOWERS_SERVICE - UserName: " + user_name);
    return $http.get("https://api.github.com/users/" + user_name + "/followers");
  };

});