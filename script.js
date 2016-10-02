var app = angular.module('app', []);


var MainController = function($scope) {

  var person = {
    firstName: "Scott",
    lastName: "Allen",
    imageSrc: "https://unsplash.it/100/100?image=22"
  }

  $scope.message = "Hello, Angular!";
  $scope.person = person;
};

var PersonCtrl = function($scope, $http) {
  var promise = $http.get("user-1783.json");
  promise.then(function(response){
    $scope.user = response.data;
  })
}

app.controller('MainController', MainController);
app.controller('PersonController', PersonCtrl);
