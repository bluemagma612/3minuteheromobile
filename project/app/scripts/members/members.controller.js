(function() {
	'use strict';

	angular
		.module('threeMinuteHero.members')
		.controller('MembersController', MembersController);

	MembersController.$inject = ['$state', 'membersDataService'];

	/* @ngInject */
	function MembersController($state, membersDataService) {

		var vm = angular.extend(this, {
			members: [],
			navigate: navigate
		});

		vm.members = membersDataService.all();

		function navigate(memberId) {
			$state.go('app.member', { memberId: memberId });
		}
	}
})();
