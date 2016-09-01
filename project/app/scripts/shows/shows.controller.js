(function () {
	'use strict';

	angular
		.module('threeMinuteHero.shows')
		.controller('ShowsController', ShowsController);

	ShowsController.$inject = ['$scope', '$state', 'showsService'];

	function ShowsController($scope, $state, showsService) {
		var vm  = angular.extend(this, {
			shows: [],
			navigate: navigate,
			doRefresh: doRefresh
		});

		showsService.all(function(data) {
			vm.shows = data;
			if(vm.shows.length === 0) {
				vm.shows.push({
					title: "There are no shows scheduled at this time. Check back again soon!",
					thumb_url: "images/icon.png"
				});
			}

		});

		function navigate(showId) {
			$state.go('app.show', {showId : showId});
		}

		function doRefresh() {
			setTimeout($scope.$broadcast('scroll.refreshComplete'), 16000);
		}
	}

})();
