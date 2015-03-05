var app = angular.module('happyPosts');

app.factory('posts', function($http){
  var p = {posts: []};

  p.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, p.posts);
    });
  };

  return p;

});
