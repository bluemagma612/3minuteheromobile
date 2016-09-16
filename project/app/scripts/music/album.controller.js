(function() {
	'use strict';

	angular
		.module('threeMinuteHero.music')
		.controller('AlbumController', AlbumController);

	AlbumController.$inject = ['$stateParams', 'musicDataService'];

	/* @ngInject */
	function AlbumController($stateParams, musicDataService) {
		var vm = angular.extend(this, {
			album: null
		});

		// ********************************************************************

		vm.toggleItem = function(item) {
			if (vm.isItemShown(item)) {
				vm.shownItem = item;
			} else {
				vm.shownItem = null;
			}
		};
		vm.isItemShown = function(item) {
			return vm.shownItem === null;
		};

		var albumId = parseInt($stateParams.albumId);
		vm.album = musicDataService.get(albumId);

	}
})();
