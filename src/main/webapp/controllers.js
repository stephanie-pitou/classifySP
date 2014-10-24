angular.module('adApp.controllers', []).controller('AdListController', function($scope, $state, popupService, $window, Ad) {
	$scope.ads = Movie.query(); // fetch all ads. Issues a GET to /api/ad

	$scope.deleteAd = function(ad) { // Delete a ad. Issues a DELETE to
										// /api/ad/delete/:id
		if (popupService.showPopup('Really delete this?')) {
			ad.$delete(function() {
				$window.location.href = ''; // redirect to home
			});
		}
	};
}).controller('AdViewController', function($scope, $stateParams, Ad) {
	$scope.ad = Ad.get({
		id : $stateParams.id
	}); // Get a single movie.Issues a GET to /api/movies/:id
}).controller('AdCreateController', function($scope, $state, $stateParams, Ad) {
	$scope.ad = new Ad(); // create new ad instance. Properties will be set
							// via ng-model on UI

	$scope.addAd = function() { // create a new ad. Issues a POST to
								// /api/ad/create
		$scope.ad.$save(function() {
			$state.go('ads'); // on success go back to home i.e. ads state.
		});
	};
}).controller('AdEditController', function($scope, $state, $stateParams, Ad) {
	$scope.updateAd = function() { // Update the edited ad. Issues a PUT to
									// /api/ad/update
		$scope.ad.$update(function() {
			$state.go('ads'); // on success go back to home i.e. ads state.
		});
	};

	$scope.loadAd = function() { // Issues a GET request to /api/ad/:id to
									// get a ad to update
		$scope.ad = Ad.get({
			id : $stateParams.id
		});
	};

	$scope.loadAd(); // Load a ad which can be edited on UI
});