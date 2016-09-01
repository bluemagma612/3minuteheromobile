(function() {
	'use strict';

	angular
		.module('threeMinuteHero.wordpress')
		.controller('ShowController', ShowController);

	ShowController.$inject = [
		'$stateParams', '$ionicActionSheet', '$cordovaSocialSharing', 'showsService'];

	/* @ngInject */
	function ShowController($stateParams, $ionicActionSheet, $cordovaSocialSharing, showsService) {
		var showId = parseInt($stateParams.showId, 10);

		var vm = angular.extend(this, {
			show: null,
			share: share
		});

		function activate() {
			loadshow();
		}
		activate();

		// ********************************************************************

		function share() {
			$ionicActionSheet.show({
				buttons: [
					{ text: 'Facebook' },
					{ text: 'Twitter' },
					{ text: 'Email' },
					{ text: 'Share' }
				],
				titleText: 'Share',
				cancelText: 'Cancel',
				buttonClicked: function(index) {
					switch(index) {
						case 0:
							shareToFacebook();
							break;
						case 1:
							shareToTwitter();
							break;
						case 2:
							shareViaEmail();
							break;
						case 3:
							shareNative();
							break;
					}
					return true;
				}
			});
		}

		function shareNative() {
			var message = vm.show.title;
			var subject = vm.show.description;

			$cordovaSocialSharing
				.share(message, subject, null, vm.show.url);
		}

		function shareToFacebook() {
			var message = vm.show.title;
			var link = vm.show.url;

			$cordovaSocialSharing
				.shareViaFacebook(message, link);
		}

		function shareToTwitter() {
			var message = vm.show.title + ' ' + vm.show.url;
			var link = vm.show.url;

			$cordovaSocialSharing
				.shareViaTwitter(message, link);
		}

		function shareViaEmail() {
			var message = 'Read more about "' + vm.show.title + '" ' + vm.show.url;
			var subject = vm.show.title;

			$cordovaSocialSharing
				.shareViaEmail(message, subject, [], [], [], null);
		}

		function loadshow() {
			showsService.get(showId)
				.then(function(show) {
					vm.show = show;
				});
		}
	}
})();
