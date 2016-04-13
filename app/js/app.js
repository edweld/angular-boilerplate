'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).config(function($routeProvider, $locationProvider){
	$routeProvider.when('/view1',{
	    controller:'Controller1',
	    templateUrl:'partials/partial1.html'
	}).when('/view2',{
	    controller: 'Controller2',
	    templateUrl: 'partials/partial2.html'
	}).otherwise({redirectTo:'/view1'});
	//$locationProvider.html5Mode(true); //activate HTML5 Mode
});

