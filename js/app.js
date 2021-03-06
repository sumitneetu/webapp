'use strict';
var app = angular.module('MobileAngularUiExamples', ['ngRoute','mobile-angular-ui','ui.bootstrap','mobile-angular-ui.gestures','vcRecaptcha','jp.ng-bs-animated-button']);
app.constant('apiURL', 'http://flexsin.org/lab/glocalcircle/webservices/');
app.constant('global_storage', 'JobsStorage_Storage_key');
app.run(function($transform,$templateCache,$rootScope) {
  window.$transform = $transform;
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
});
app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'templates/home.html', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/login', {templateUrl: 'templates/login.html',controller:'LoginCtrl',reloadOnSearch: false,'cache':false});
  $routeProvider.when('/forget', {templateUrl: 'templates/forget.html', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/joblist', {templateUrl: 'templates/joblisting.html',controller:'JobsCtrl', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/jobdetail', {templateUrl: 'templates/jobdetail.html',controller:'JobsCtrl', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/message', {templateUrl: 'templates/message.html',controller:'MessageCtrl', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/profile', {templateUrl: 'templates/profile.html',controller:'ProfileCtrl', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/managejobs', {templateUrl: 'templates/managejobs.html',controller:'JobsCtrl', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/howitwork', {templateUrl: 'templates/howitwork.html', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/portfolio', {templateUrl: 'templates/portfolio.html', reloadOnSearch: false,'cache':false});
  $routeProvider.when('/freelancers', {templateUrl: 'templates/freelancers.html', reloadOnSearch: false,'cache':false});
   $routeProvider.when('/postjob', {templateUrl: 'templates/postjob.html', reloadOnSearch: false,'cache':false});
});

