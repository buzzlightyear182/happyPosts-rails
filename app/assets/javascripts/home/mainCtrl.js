var app = angular.module('happyPosts',['ui.router', 'templates']);

app.controller('mainCtrl', function($scope, posts){

  $scope.posts = posts.posts;

  $scope.addPost = function(){
    //Prevent user from submitting blank
    if(!$scope.title || $scope.title === ''){
      return;
    }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      description: $scope.description,
      upvotes: 0,
      comments: [
        // {author: 'test01', body: 'this is a fake comment 01', upvotes: 0},
        // {author: 'test02', body: 'this is a fake comment 02', upvotes: 0}
      ]
    });
    $scope.title='';
    $scope.link='';
    $scope.description = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };

});
