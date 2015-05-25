angular
	.module('app', [
			'ui.router'
		])
	// This is known as dependency injection
	// Annotating - Defining modules twice as minification will change variables
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl',
				resolve: {
					friends: ['Friends', function(Friends) {
						return Friends.get();
					}]
				}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
	}])