angular.module('adApp', ['ui.router', 'ngResource', 'adApp.controllers', 'serviceApp.services']);
 
angular.module('adApp').config(function($stateProvider) {
  $stateProvider.state('ads', { // state for showing all ads
    url: '/',
    templateUrl: 'view-ads.html',
    controller: 'AdListController'
  }).state('viewAd', { //state for showing single ad
    url: '/ads/:id/view',
    templateUrl: 'view-specific-ad.html',
    controller: 'AdViewController'
  }).state('newAd', { //state for adding a new ad
    url: '/Ads/new',
    templateUrl: 'new-add.html',
    controller: 'AdCreateController'
  }).state('editAd', { //state for updating an ad
    url: '/ads/:id/edit',
    templateUrl: 'edit-ad.html',
    controller: 'AdEditController'
  });
}).run(function($state) {
  $state.go('ads'); //make a transition to ads state when app starts
});