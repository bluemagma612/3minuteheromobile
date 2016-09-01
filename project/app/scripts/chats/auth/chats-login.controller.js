(function() {
	'use strict';

	angular
		.module('threeMinuteHero.chats')
		.controller('ChatsLoginController', ChatsLoginController);

	ChatsLoginController.$inject = [
		'$scope', '$ionicModal', '$state', '$ionicLoading', '$ionicHistory', 'chatsAuthService'];

	/* @ngInject */
	function ChatsLoginController(
		$scope, $ionicModal, $state, $ionicLoading, $ionicHistory, chatsAuthService) {
		var vm = angular.extend(this, {
			user: {
				email: null,
				password: null
			},
			signIn: signIn,
			signUp: signUp
		});

		$ionicModal.fromTemplateUrl('scripts/chats/auth/chats-signup.html', {
			scope: $scope
		}).then(function(modal) {
			vm.modal = modal;
		});

		function signUp(user) {
			if (vm.user.email && vm.user.password && vm.user.displayname) {
				$ionicLoading.show({});
				chatsAuthService.signUp(user).then(function() {
					$ionicLoading.hide();
					vm.modal.hide();
				}).catch(function(error) {
					$ionicLoading.hide();
					alert('Error: ' + error);
				});
			} else {
				alert('Please complete all fields');
			}
		}

		function signIn() {
			if (vm.user.email && vm.user.password) {
				$ionicLoading.show({});
				chatsAuthService.signIn(vm.user.email, vm.user.password).then(function(authData) {
					$ionicLoading.hide();

					$ionicHistory.currentView($ionicHistory.backView());
					$state.go('app.chat-rooms', {}, {
						location: 'replace'
					});
				}).catch(function(error) {
					$ionicLoading.hide();
					alert('Login failed:' + error.message);
				});
			} else {
				alert('Please enter your email and password');
			}
		}
	}
})();
