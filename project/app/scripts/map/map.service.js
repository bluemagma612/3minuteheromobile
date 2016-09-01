(function() {
	'use strict';

	angular
		.module('threeMinuteHero.map')
		.factory('mapService', mapService);

	mapService.$inject = ['appSettings'];

	/* @ngInject */
	function mapService(appSettings) {
		var service = {
			getMapData: getMapData
		};
		return service;

		function getMapData() {
			return appSettings.getMapData();
		}
	}
})();
