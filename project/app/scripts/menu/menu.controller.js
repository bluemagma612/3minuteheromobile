(function() {
	'use strict';

	angular
		.module('threeMinuteHero.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['appSettings', 'externalAppsService'];

	/* @ngInject */
	function MenuController(appSettings, externalAppsService) {
		var vm = angular.extend(this, {
			facebookPage: appSettings.getSettings().facebookPage,
			openLink: openLink
		});

		function openLink(url) {
			externalAppsService.openExternalUrl(url);
		}
	}
})();
