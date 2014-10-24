var serviceApp = angular.module('serviceApp.services', []);

serviceApp.factory('Ads', function($resource) {
	return $resource('/api/ad/:id', {
		id : '@_id'
	}, {
		update : {
			method : 'PUT'
		}
	});
});

serviceApp.factory('Entry', function($resource) {
	return $resource('/api/ad/:id'); // Note the full endpoint address
});