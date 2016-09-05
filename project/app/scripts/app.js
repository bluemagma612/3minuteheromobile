
angular.module('threeMinuteHero', [
	'ionic',
	'config',
	'ionic.service.core',
	'ionic.service.push',
	'parse-angular',
	'parse-angular.enhance',
	'threeMinuteHero.common',
	'threeMinuteHero.infrastructure',
	'threeMinuteHero.chats',
	'threeMinuteHero.news',
	'threeMinuteHero.map',
	'threeMinuteHero.home',
	'threeMinuteHero.youtube',
	'threeMinuteHero.push',
	'threeMinuteHero.menu',
	'threeMinuteHero.facebook',
	'threeMinuteHero.wordpress',
	'threeMinuteHero.stream',
	'threeMinuteHero.events',
	'threeMinuteHero.members',
	'threeMinuteHero.shows',
	'gMaps',
	'ngCordova',
	'angularMoment'
])

.value('_', window._)

.run(function($ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
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
	window.Parse.initialize(ENV.parse.applicationId, ENV.parse.key);
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});
