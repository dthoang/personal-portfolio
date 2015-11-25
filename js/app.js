// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state('home', {
		url: "",
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

// Home page controller--handles data for the home page
.controller('homeCtrl', function($scope){

})

// Web portfolio controller--handles data for the web portfolio page
.controller('webCtrl', function($scope, $http){
	// Gets data containing artwork information
	$http.get('json/portfolio_webdev.json').success(function(response){
		$scope.webData = response
	})
})

// Artwork page controller--handles data for the art portfolio page
.controller('artCtrl', function($scope, $http){
	$http.get('json/portfolio_artwork.json').success(function(response){
		$scope.artData = response
	})

	// Selects artwork data for viewing
	$scope.artView = function(response) {
		$('.pictureView').empty();
		$('.information').empty();
		var title = response.title;
				console.log('title');
		var date = response.date;
		var medium = response.medium;
		var dimensions = response.dimensions;
		var image = response.image;
		$('.pictureView').append('<img src ="artPortfolio/'+ image +'" /></a>');
		$('.information').append('<p>' + title + '</p> <p>' + date + '</p> <p>' + medium + '</p> <p>' + dimensions + '</p>');
	}
})

// Contact page controller--handles data for the contact info page
.controller('contactCtrl', function($scope){

})

