(function() {
	'use strict';

	angular
		.module('threeMinuteHero.home', [
			'ionic',
			'ngCordova',
			'threeMinuteHero.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.home', {
					url: '/home',
					views: {
						'menuContent': {
							templateUrl: 'scripts/home/home.html',
							controller: 'HomeController as vm'
						}
					}
				});
		});
})();
