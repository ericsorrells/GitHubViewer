'use strict';

angular.module('myApp')
.service('getRepos', function($http) {

  this.getUserRepos = function(user_name){
    console.log("REPOS_SERVICE - UserName: " + user_name);
    return $http.get("https://api.github.com/users/" + user_name + "/repos");
  };

});