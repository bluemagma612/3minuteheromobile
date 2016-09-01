(function() {
	'use strict';

	angular
		.module('threeMinuteHero.members')
		.factory('membersDataService', membersDataService);

	membersDataService.$inject = [];

	/* @ngInject */
	function membersDataService() {
		var members = [{
			id: 0,
			smallImg: 'images/members/small-jeff.png',
			fullImg: 'images/members/full-jeff.jpg',
			name: 'Jeff Nelson',
			instrument: 'Lead vocals, trombone',
			bio: ''
		}, {
			id: 1,
			smallImg: 'images/members/small-jay.png',
			fullImg: 'images/members/full-jay.jpg',
			name: 'Jay Kalk',
			instrument: 'Vocals, guitar',
			bio: ''
		},{
			id: 2,
			smallImg: 'images/members/small-jt.png',
			fullImg: 'images/members/full-jt.jpg',
			name: 'Jonathon TeBeest',
			instrument: 'Drums, vocals, studio master',
			bio: ''
		},{
			id: 3,
			smallImg: 'images/members/small-bryce.png',
			fullImg: 'images/members/full-bryce.jpg',
			name: 'Bryce Blilie',
			instrument: 'Trumpet, tech',
			bio: ''
		}, {
			id: 4,
			smallImg: 'images/members/small-paul.png',
			fullImg: 'images/members/full-paul.jpg',
			name: 'Paul Gronert',
			instrument: 'Saxophones',
			bio: ''
		}, {
			id: 5,
			smallImg: 'images/members/small-salty.png',
			fullImg: 'images/members/full-salty.jpg',
			name: 'Matt "Salty McBastard" Hanzelka',
			instrument: 'Trombone',
			bio: ''
		},  {
			id: 6,
			smallImg: 'images/members/small-dave.png',
			fullImg: 'images/members/full-dave.jpg',
			name: 'Dave Kittleson',
			instrument: 'Bass',
			bio: ''
		},  {
			id: 7,
			smallImg: 'images/members/small-al.png',
			fullImg: 'images/members/full-al.jpg',
			name: 'Al Berg',
			instrument: 'Keys',
			bio: ''
		}];

		var service = {
			all: all,
			get: get
		};
		return service;


		function all() {
			// return all members
			return members;
		}

		function get(memberId) {
			//search the array for a matching memberId
			for (var i = 0; i < members.length; i++) {
				if (members[i].id === parseInt(memberId)) {
					var member = members[i];
					return member;
				}
			}
			return null;
		}

	}
})();
