(function() {
	'use strict';

	angular
		.module('threeMinuteHero.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['appSettings'];

	/* @ngInject */
	function MenuController(appSettings) {
		var vm = angular.extend(this, {
			facebookPage: appSettings.getSettings().facebookPage
		});
	}
})();
