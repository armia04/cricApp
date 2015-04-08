var app = angular.module('cricApp', ['ngRoute','scoreController']);

app.config(function($routeProvider){
	$routeProvider.when('/', 
	{
		controller : 'init',
		templateUrl : 'views/newBatsman.html'
	})
	.when('/added/:playerName', 
	{
		controller : 'newBatsmanAdded',
		templateUrl : 'views/batsman.html'	
	}).
	otherwise({
		redirectTo: '/'
	});
});
