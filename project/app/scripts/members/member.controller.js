(function() {
	'use strict';

	angular
		.module('threeMinuteHero.members')
		.controller('MemberController', MemberController);

	MemberController.$inject = ['$stateParams', 'membersDataService'];

	/* @ngInject */
	function MemberController($stateParams, membersDataService) {
		var vm = angular.extend(this, {
			member: null
		});

		// ********************************************************************

		var memberId = parseInt($stateParams.memberId);
		vm.member = membersDataService.get(memberId);
	}
})();
