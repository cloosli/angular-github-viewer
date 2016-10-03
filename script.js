
(function() {

  var app = angular.module('githubViewer', []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      console.log(response.config.url);
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError);
    };

    var onRepos = function(response) {
      console.log(response.config.url);
      $scope.repos = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch user";
    };
    
    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    $scope.search = function(username) {
      $scope.error = "";
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 5;
    
  };

  app.controller('MainController', ["$scope", "$http", MainController]);
})();