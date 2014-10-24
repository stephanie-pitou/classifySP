var myApp = angular.module('myApp', []);

myApp.controller('AdsController', function($scope, $http) {
	$http.get("api/ad").success(function(response) {
		$scope.ads = response;
	});
});

myApp.controller("ButtonsController", function($scope) {
	$scope.showAds = function() {
		$http.get("api/ad").success(function(response) {
			$scope.ads = response;
		});
	};
	$scope.showSpecificAd = function() {
		$http.get("api/ad/:id").success(function(response) {
			$scope.ads = response;
		});
	};
});

myApp.controller('ExampleController', [ '$window', '$scope', function($window, $scope) {
	$scope.greet = function() {
		$window.alert('Hello ');
	}
} ]);

myApp.controller('Ctrl', function($scope) {
	$scope.color = 'blue';
	$scope.isShown = function(color) {
		return color === $scope.color;
	};
});

myApp.controller('mainController', function($scope) {
	$scope.goAds = false;
});