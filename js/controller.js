var scoreController = angular.module('scoreController',[]);

scoreController.controller('init', function($scope){

});


scoreController.controller('newBatsmanAdded',['$scope','$routeParms',function($scope,$routeParms){

	$scope.player = $routeParms.player;
	
}]);