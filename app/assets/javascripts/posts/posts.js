var app = angular.module('happyPosts');

app.factory('posts', ['$http',function($http){
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

  // Retrieves a single post from our server
  p.get = function(id){
    return $http.get('/posts/' + id).then(function(res){
      return res.data;
    });
  };

  p.addComment = function(id, comment){
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  p.upvoteComment = function(post, comment){
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').success(function(data){
      comment.upvotes += 1;
    });
  };

  return p;

}]);
