var rtapp = angular.module("sampleApp", [ 'ngRoute' ]);

rtapp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/route1/:param', {
		templateUrl : 'angular-route-template-1.jsp',
		controller : 'RouteController'
	}).when('/route2/:param', {
		templateUrl : 'angular-route-template-2.jsp',
		controller : 'RouteController'
	}).otherwise({
		redirectTo : '/'
	});
} ]);

rtapp.controller("RouteController", function($scope, $routeParams) {
	$scope.param = $routeParams.param;
});