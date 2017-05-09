app.controller('LoginCtrl',function($rootScope, $scope,$location,Authenticate,$location,JobsStorage) {

$scope.firsttab=true;
$scope.secoundtab=false;

$scope.isSubmitting = null;
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
$scope.countries=[{id:0,countries_name:'Select Country'},{id:1,countries_name:'India'},{id:2,countries_name:'China'},{id:3,countries_name:'pakistan'}];
$scope.buttonOption={
buttonDefaultText: 'Register Now',
buttonDefaultClass:'tg-btn',
buttonSubmittingText :'Loading....'
};
$scope.user={};
$scope.user.country_name={id:0};

$scope.wuser={};
$scope.wuser.country_name={id:0};
$scope.isSSubmitting=null;
$scope.signUp = function(user) { 
if($scope.firsttab) {
  if (!$scope.regularuser.$valid) {
	 return false;
  }
 }
if($scope.secoundtab) {
  if (!$scope.workuser.$valid) {
	 return false;
  }
 }
$scope.isSSubmitting=true;
  Authenticate.registerUser(user).then(function(response) { 
      if (response.status == 200) {
			$scope.isSubmitting=null;
                        if (response.data.status) {
                        	$scope.result = 'success';
                            $location.path('signin');
                        }

                    } else {
                      $scope.result = 'success';
                       console.log("erroe in the form");
                    }
            });
}
$scope.resultdata=null;
$scope.signIn = function(user) {
 		$scope.isSSSubmitting=true;
        $scope.one_login = true;
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        var userpattern = /^[a-zA-Z0-9_.]*$/
        if (user != undefined) {
            Authenticate.login(user).then(function(response) {
                $scope.resultdata='success';
                if (response.status == 200) {
                    if (response.data.status == "true") {
                     
                    $location.path('home');
                    } else {
                        $scope.one_login = false;
                    }
                } else {
                }
            });
            
        } else {
           console.log("error!");
        }
    };
$scope.luser={};
$scope.loginbuttonOption={
	buttonDefaultText: 'Login',
	buttonDefaultClass:'tg-btn',
	buttonSubmittingText :'Loading....'
};
$scope.isSSSubmitting=null;
$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};

});