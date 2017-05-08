app.controller('HomeCtrl',function($rootScope, $scope,$location) {

  $scope.goToPage = function(page) { 
      $location.path(page);
  }

});