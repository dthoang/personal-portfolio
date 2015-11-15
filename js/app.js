// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
		})
		.state('webwork', {
			url: '/webwork',
			templateUrl: 'templates/webwork.html',
			controller: 'WebController'
		})
		.state('artwork', {
			url: '/artwork',
			templateUrl: 'templates/artwork.html',
			controller: 'ArtController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
	$scope.introduction = "Hi, I'm Daniel Hoang! Pleast to meet you." //REMOVE THIS LATER
	$scope.mood = "alright" //this too
})

// About page controller: define $scope.about as a string
.controller('WebController', function($scope){
	$scope.testing = "Import web stuff here."
})

// Content controller: define $scope.url as an image
.controller('ArtController', function($scope){
	$scope.url = "https://tafa7alkayl.files.wordpress.com/2015/01/love-banana-minions.jpg"
})

// Content controller: define $scope.url as an image
.controller('ContactController', function($scope){
	$scope.url = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"
})

