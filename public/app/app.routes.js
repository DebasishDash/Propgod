angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html'
		})
		.when('/about', {
			templateUrl: 'app/views/pages/about.html'
		})

		.when('/logout', {
			templateUrl: 'app/views/pages/home.html'
		})


        .when('/update', {
			templateUrl: 'app/views/pages/edit.html'
		})

		.when('/save', {
			templateUrl: 'app/views/pages/home.html'
		})


		.when('/allStories', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}

		})

	$locationProvider.html5Mode(true);

})