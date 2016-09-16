(function() {
	'use strict';

	angular
		.module('threeMinuteHero.music', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.albums', {
					url: '/albums',
					views: {
						'menuContent': {
							templateUrl: 'scripts/music/albums.html',
							controller: 'AlbumsController as vm'
						}
					}
				})
				.state('app.album', {
					url: '/albums/:albumId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/music/album.html',
							controller: 'AlbumController as vm'
						}
					}
				});
		});
})();
