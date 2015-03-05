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

  p.upvote = function(post){
    return $http.put('/posts/' + post.id + '/upvote.json').success(function(data){
      post.upvotes += 1;
    });
  };

  return p;

});
