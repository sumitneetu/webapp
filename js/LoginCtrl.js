app.controller('LoginCtrl',function($rootScope, $scope,$location) {

$scope.firsttab=true;
$scope.secoundtab=false;
$scope.registerTabs = function(tab) {
	if(tab=='first') {
		$scope.firsttab=true;
		$scope.secoundtab=false;
	}
	if(tab=='secound') {
		$scope.firsttab=false;
		$scope.secoundtab=true;
	}

}

});