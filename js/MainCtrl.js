app.controller('MainCtrl',function($rootScope, $scope,$location) {

  $scope.goToPage = function(page) { 
      $location.path(page);
  }
  
  $scope.logout = function() {  
      $location.path("login");
  }
  
  
   console.log("this is your app's controller");
                $scope.response = null;
                $scope.widgetId = null;

                $scope.model = {
                    key: 'thisissdfsdfsnn'
                };

                $scope.setResponse = function (response) {
                    console.info('Response available');

                    $scope.response = response;
                };

                $scope.setWidgetId = function (widgetId) {
                    console.info('Created widget ID: %s', widgetId);

                    $scope.widgetId = widgetId;
                };

                $scope.cbExpiration = function() {
                    console.info('Captcha expired. Resetting response object');

                    vcRecaptchaService.reload($scope.widgetId);

                    $scope.response = null;
                 };

                $scope.submit = function () {
                    var valid;

                    /**
                     * SERVER SIDE VALIDATION
                     *
                     * You need to implement your server side validation here.
                     * Send the reCaptcha response to the server and use some of the server side APIs to validate it
                     * See https://developers.google.com/recaptcha/docs/verify
                     */
                    console.log('sending the captcha response to the server', $scope.response);

                    if (valid) {
                        console.log('Success');
                    } else {
                        console.log('Failed validation');

                        // In case of a failed validation you need to reload the captcha
                        // because each response can be checked just once
                        vcRecaptchaService.reload($scope.widgetId);
                    }
                };
  

});