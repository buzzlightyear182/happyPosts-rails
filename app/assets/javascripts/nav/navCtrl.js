var app = angular.module('happyPosts');

// angular-devise provides us with the methods we can expose to the $scope

app.controller('navCtrl',['$scope','Auth', function($scope, Auth){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser().then(function(user){
    $scope.user = user;
  });

// angular-devise automatically broadcast events when authentication happens

  $scope.$on('devise:new-registration', function(e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function(e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function(e, user){
    $scope.user = {};
  });

}])
