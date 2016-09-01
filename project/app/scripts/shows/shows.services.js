(function () {
	'use strict';

	angular
		.module('threeMinuteHero.shows')
		.factory('showsService', showsService);

	showsService.$inject = ['$http', '$q', 'appSettings'];

	function showsService($http, $q, appSettings) {
		//https://www.bandsintown.com/api/requests#artists-events
		// returns a list of events given an artist name

		var artistName = appSettings.getSettings().showsArtistName;
		var apiKey = appSettings.getSettings().showsApiKey;
		var showsBaseUrl = appSettings.getSettings().showsBaseUrl;
		var url = showsBaseUrl + artistName + "/events.json?api_version=2.0&app_id=" + apiKey;
		var result = [];

		var service = {
			all: all,
			get: get
		};

		return service;

		function all(callback) {
			$http.get(url)
				.success(function(data, status, headers, config) {
					result = data;
					callback(result);
				})
				.error(function(data, status, headers, config) {
					console.log('ERROR retrieving show listing');
					callback(result);
				});
		}

		// returns the details for a single show
		function get(showId) {
			for (var i = 0; i < result.length; i++) {
				if (result[i].id === showId) {
					return $q.when(result[i]);
				}
			}
			return $q.when(null);
		}
	}
})();
