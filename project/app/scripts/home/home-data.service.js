(function() {
	'use strict';

	angular
		.module('threeMinuteHero.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return {
			getFollowUsItems: getFollowUsItems
		};

		function getFollowUsItems(settings) {
			return [{
				icon: 'ion-social-facebook',
				title: 'Facebook',
				url: 'https://www.facebook.com/' + settings.socialMediaAccounts.facebook
			}, {
				icon: 'ion-social-twitter',
				title: 'Twitter',
				url: 'https://twitter.com/' + settings.socialMediaAccounts.twitter
			}, {
				icon: 'ion-ipad',
				title: 'Web site',
				url: settings.website
			}, {
				icon: 'ion-music-note',
				title: 'Music',
				url: 'https://www.cdbaby.com/cd/3minutehero'
			}, {
				icon: 'ion-briefcase',
				title: 'Merchandise',
				url: settings.store
			}];
		}
	}
})();
