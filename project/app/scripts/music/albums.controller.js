(function() {
	'use strict';

	angular
		.module('threeMinuteHero.music')
		.controller('AlbumsController', AlbumsController);

	AlbumsController.$inject = ['$state', 'musicDataService'];

	/* @ngInject */
	function AlbumsController($state, musicDataService) {

		var vm = angular.extend(this, {
			albums: [],
			navigate: navigate
		});

		vm.albums = musicDataService.all();

		function navigate(albumId) {
			$state.go('app.album', { albumId: albumId });
		}
	}
})();
