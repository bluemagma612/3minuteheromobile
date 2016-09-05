(function() {
	'use strict';

	angular
		.module('threeMinuteHero.merch', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.merch', {
					url: '/merch',
					views: {
						'menuContent': {
							templateUrl: 'scripts/merch/merch.html',
							controller: 'MerchController as vm'
						}
					}
				});
		});
})();
