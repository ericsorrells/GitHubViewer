'use strict';

angular.module('myApp.following', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/following', {
    templateUrl: 'following/following.html',
    controller: 'FollowingCtrl'
  });
}])


.controller('FollowingCtrl', function($scope, getFollowing, passUserName) {
  // GET USER NAME FOR FOLLOWING SERVICE
  $scope.user_name = passUserName.getUserName();

  // GET FOLLOWING INFO FOR USER_NAME
  var getFollowingInfo = function(user_name) {
    getFollowing.getFollowing(user_name)
      .success(function(data){
        $scope.following = data;
      })
      .error(function() {
        alert('Cant Get Following Info!');
      });
    };

    $scope.var1 = getFollowingInfo($scope.user_name);

});


// 'use strict';

// angular.module('myApp.repos', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/repos', {
//     templateUrl: 'repos/repos.html',
//     controller: 'ReposCtrl'
//   });
// }])

// .controller('ReposCtrl', function($scope, getRepos, passUserName) {

//   //get user_name from passUserName service
//   $scope.user_name = passUserName.getUserName();
  
//   // GET REPO INFO FOR USER_NAME
//   var getUserRepos = function(user_name) {
//     getRepos.getUserRepos(user_name)
//       .success(function(data){
//         $scope.repos = data;
//       })
//       .error(function() {
//         alert('Cant Get User Repos!');
//       });
//     };

//   $scope.var1 = getUserRepos($scope.user_name); 
// });
