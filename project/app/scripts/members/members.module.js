(function() {
	'use strict';

	angular
		.module('threeMinuteHero.members', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.members', {
					url: '/members',
					views: {
						'menuContent': {
							templateUrl: 'scripts/members/members.html',
							controller: 'MembersController as vm'
						}
					}
				})
				.state('app.member', {
					url: '/members/:memberId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/members/member.html',
							controller: 'MemberController as vm'
						}
					}
				});
		});
})();
