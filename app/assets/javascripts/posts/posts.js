var app = angular.module('happyPosts');

app.factory('posts', function($http){
  var p = {posts: []};

  p.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, p.posts);
    });
  };

  p.create = function(post){
    return $http.post('/posts.json', post).success(function(data){
      p.posts.push(data);
    });
  };

  return p;

});
