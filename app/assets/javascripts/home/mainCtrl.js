var app = angular.module('happyPosts');

app.controller('mainCtrl', ['$scope', 'posts', function($scope, posts){

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    //Prevent user from submitting blank
    if(!$scope.title || $scope.title === ''){
      return;
    }

    posts.create({
      title: $scope.title,
      link: $scope.link,
      description: $scope.description,
      upvotes: 0
    })

    $scope.title='';
    $scope.link='';
    $scope.description = '';
  };

  $scope.incrementUpvotes = function(post){
    posts.upvote(post);
  };

}]);
