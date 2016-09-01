(function() {
	'use strict';

	angular
		.module('threeMinuteHero.shows', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.shows', {
					url: '/shows',
					views: {
						'menuContent': {
							templateUrl: 'scripts/shows/shows.html',
							controller: 'ShowsController as vm'
						}
					}
				})
				.state('app.show', {
					url: '/show/:showId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/shows/show.html',
							controller: 'ShowController as vm'
						}
					}
				});
		});
})();
