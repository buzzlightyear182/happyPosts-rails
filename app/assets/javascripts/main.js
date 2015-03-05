var app = angular.module('happyPosts');

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'mainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    });

    $stateProvider.state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'postsCtrl'
    });

    $urlRouterProvider.otherwise('home');
});
