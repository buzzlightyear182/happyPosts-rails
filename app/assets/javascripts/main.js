var app = angular.module('happyPosts');

app.config(function($httpProvider) {
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

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
      controller: 'postsCtrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
      // Resolve: Angular ui-router detects we are entering the posts state and will then automatically query the server for the full post object, including comments. Only after the request has returned will the state finish loading.
    });

    $urlRouterProvider.otherwise('home');
});
