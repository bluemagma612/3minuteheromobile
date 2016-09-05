(function() {
	'use strict';

	angular
		.module('threeMinuteHero.merch')
		.controller('MerchController', MerchController);

	merchController.$inject = ['$state', 'merchDataService'];

	/* @ngInject */
	function MerchController($state, merchDataService) {

		var vm = angular.extend(this, {
			merch: [],
			navigate: navigate
		});

		// vm.merch = merchDataService.all();
        //
		// function navigate(memberId) {
		// 	$state.go('app.member', { memberId: memberId });
		// }
	}
})();
