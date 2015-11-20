// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl',
		})
		.state('webwork', {
			url: '/webwork',
			templateUrl: 'templates/webwork.html',
			controller: 'webCtrl'
		})
		.state('artwork', {
			url: '/artwork',
			templateUrl: 'templates/artwork.html',
			controller: 'artCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
})

// .controller('webCtrl', function($scope, $http){
// 	$http.get('json/portfolio_webdev.json').success(function(response){
// 		$scope.webData = response
// 	})

// })

// .controller('artCtrl', function($scope, $http){
// 	$http.get('json/portfolio_webdev.json').success(function(response){
// 		$scope.webData = response
// 	})

// })


// Home page controller--handles data for the home page
.controller('homeCtrl', function($scope){
	$scope.introduction = "Hi, I'm Daniel Hoang! Please to meet you." //REMOVE THIS LATER
	$scope.mood = "alright" //this too
})

// Web portfolio controller--handles data for the web portfolio page
.controller('webCtrl', function($scope, $http){
	$http.get('json/portfolio_webdev.json').success(function(response){
		$scope.webData = response
	})
})

// Artwork page controller--handles data for the art portfolio page
.controller('artCtrl', function($scope, $http){
	$http.get('json/portfolio_artwork.json').success(function(response){
		$scope.artData = response
	})
})

// Contact page controller--handles data for the contact info page
.controller('contactCtrl', function($scope){
	$scope.greeting = "hello!"
})

