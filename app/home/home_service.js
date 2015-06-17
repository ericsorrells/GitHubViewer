'use strict';

angular.module('myApp')
.service('getUser', function($http) {
  console.log("HOME_SERVICE.JS");

  // GET USERs GITHUB INFO
  this.getUserInfo = function(user_name){
    console.log("HOME_SERVICE - UserName: " + user_name);
    return $http.get("https://api.github.com/users/" + user_name);
  };
});