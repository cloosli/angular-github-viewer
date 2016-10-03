(function() {

  var app = angular.module("githubViewer", ["ngRoute"]);

  app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
                .when("/repo/:username/:reponame",{
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .when("/user/:username",{
          templateUrl: "user.html",
          controller: "UserController"
        })

        .otherwise('/main');
    }
  ]);

}());