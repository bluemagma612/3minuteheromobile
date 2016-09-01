(function() {
	'use strict';

	angular
		.module('threeMinuteHero.events')
		.factory('eventsService', eventsService);

	eventsService.$inject = ['appSettings'];

	/* @ngInject */
	function eventsService(appSettings) {
		var service = {
			getEvents: getEvents
		};
		return service;

		// *********************************************************

		function getEvents() {
			return appSettings.getEvents();
		}
	}
})();
