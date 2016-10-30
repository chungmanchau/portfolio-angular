(function() {
	var myApp = angular
	.module('blueCloud', ['ui.router', 'ngAnimate'])
	.directive('stateClass', ['$state', function($state) {
		return {
			link: function($scope, $element, $attrs) {
				var stateName = $state.current.name || 'init',
				normalizedStateName = stateName.replace(/\./g, '-');
				$element.addClass(normalizedStateName);
			}
		};
	}]);

	myApp.config(function($stateProvider, $urlRouterProvider) {
		var contactState = {
			name: 'contact',
			url: '/contact',
			templateUrl: 'js/templates/contact.html'
		};

		var workState = {
			name: 'work',
			url: '/work',
			templateUrl: 'js/templates/work.html',
		};

		var skillsState = {
			name: 'skills',
			url: '/skills',
			templateUrl: 'js/templates/skills.html'
		};

		var aboutState = {
			name: 'about',
			url: '/about',
			templateUrl: 'js/templates/about.html'
		};

		var indexState = {
			name: 'index',
			url: '/'
		};

		$stateProvider.state(contactState);
		$stateProvider.state(workState);
		$stateProvider.state(skillsState);
		$stateProvider.state(aboutState);
		$stateProvider.state(indexState);
		$urlRouterProvider.otherwise('/');
	});
})();
