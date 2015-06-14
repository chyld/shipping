angular.module('shipping', [])
.controller('MainCtrl', function($scope, $http){
  $scope.create = function(label){
    $http.post('/label', label)
    .then(function(response){
      $scope.label = response.data.label;
    });
  };
});
