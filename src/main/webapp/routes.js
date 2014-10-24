// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', [ 'ngRoute', 'ngAnimate' ]);

// animateApp.config(['$httpProvider', function($httpProvider) {
// $httpProvider.defaults.headers.patch = {
// 'Content-Type': 'application/json'
// }
// }])

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl : 'view-ads.html',
		controller : 'mainController'
	})

	// my ads page
	.when('/myAds', {
		templateUrl : 'my-ads.html',
		controller : 'myAdController'
	})

	// new ad page
	.when('/newAd', {
		templateUrl : 'new-ad.html',
		controller : 'newAdController'
	})

	// new user page
	.when('/user', {
		templateUrl : 'user.html',
		controller : 'userController'
	})

	// show ad page
	.when('/showAd/:id', {
		templateUrl : 'view-specific-ad.html',
		controller : 'viewSpecificAdController'
	});
});

// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
	$scope.pageClass = 'view-ads';
});

// my ads page controller
animateApp.controller('myAdController', function($scope) {
	$scope.pageClass = 'my-ads';
});

// new ad page controller
animateApp.controller('newAdController', function($scope) {
	$scope.pageClass = 'new-ad';
});

// new user page controller
animateApp.controller('userController', function($scope) {
	$scope.pageClass = 'user';
});

// show ad page controller
animateApp.controller('viewSpecificController', function($scope) {
	$scope.pageClass = 'view-specific-ad';
});

// OTHERS CONTROLLERS ============================================

animateApp.controller('AdsController', function($scope, $http) {
	$http.get("api/ad").success(function(response) {
		$scope.ads = response;
	});
});

// /------------------
animateApp.controller('DemoCtrl', function($scope, $http) {

	$http.defaults.transformRequest.push(function(data, headersGetter) {
		headersGetter().Accept = "application/json";
		return data;
	});

	$scope.data = {
		res : {}
	};

	$scope.doRequest = function() {
		$http.get('/api/ad/create').then(function(res) {
			$scope.data.res = res;
		}, function(res) {
			$scope.data.res = res;
		});
	}
});
// /------------------
