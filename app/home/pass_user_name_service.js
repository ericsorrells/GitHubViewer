'use strict';

angular.module('myApp')
.service('passUserName', function(){
  console.log("PASS_USER_NAME.JS");

  this.setUserName = function(user_name){
    this.user_name = user_name;
    console.log("SET USER Name: " + user_name);
  };

  this.getUserName = function(){
    console.log("GET_USER_NAME: " + this.user_name);
    return this.user_name;
  };

});