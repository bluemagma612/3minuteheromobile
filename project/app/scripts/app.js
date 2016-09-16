
angular.module('threeMinuteHero', [
	'ionic',
	'config',
	'ionic.service.core',
	'ionic.service.push',
	'threeMinuteHero.common',
	'threeMinuteHero.infrastructure',
	'threeMinuteHero.chats',
	'threeMinuteHero.home',
	'threeMinuteHero.youtube',
	'threeMinuteHero.menu',
	'threeMinuteHero.facebook',
	'threeMinuteHero.wordpress',
	'threeMinuteHero.members',
	'threeMinuteHero.shows',
	'threeMinuteHero.music',
	'ngCordova',
	'angularMoment'
])

.value('_', window._)

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {

		setTimeout(function() {
			navigator.splashscreen.hide();
		}, 2000);


		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

	});
})


.config(function($urlRouterProvider, ENV) {
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});
