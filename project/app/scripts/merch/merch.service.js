(function() {
	'use strict';

	angular
		.module('threeMinuteHero.merch')
		.factory('merchDataService', merchDataService);

	merchDataService.$inject = [];

	/* @ngInject */
	function merchDataService() {


		var service = {
			all: all,
			get: get
		};
		return service;


		function all() {


		}

		function get(memberId) {
			//search the array for a matching memberId
			// for (var i = 0; i < merch.length; i++) {
			// 	if (merch[i].id === parseInt(memberId)) {
			// 		var member = merch[i];
			// 		return member;
			// 	}
			// }
			// return null;
		}

	}
})();
