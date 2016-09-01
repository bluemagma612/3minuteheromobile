(function() {
	'use strict';

	angular
		.module('threeMinuteHero.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'News',
			path: 'wordpress-articles',
			icon: 'ion-android-list'
		}, {
			title: 'Music',
			path: 'stream',
			icon: 'ion-social-youtube'
		}, {
			title: 'Shows',
			path: 'shows',
			icon: 'ion-ios-calendar-outline'
		}, {
			title: 'The Band',
			path: 'members',
			icon: 'ion-briefcase'
		}];

		return data;
	}
})();
