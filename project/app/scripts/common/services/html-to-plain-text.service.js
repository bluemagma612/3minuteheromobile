(function() {
	'use strict';

	angular
		.module('threeMinuteHero.common')
		.factory('htmlToPlainText', htmlToPlainText);

	htmlToPlainText.$inject = [];

	/* @ngInject */
	function htmlToPlainText() {
		return function(text) {


			var replaceHtmlEntites = (function() {
				var translate_re = /&(#8217|#8212|#8220|nbsp|amp|quot|lt|gt);/g,
					translate = {
						'#8217': "'",
						'#8212': "—",
						'#8220': '"',
						'nbsp': String.fromCharCode(160),
						'amp' : '&',
						'quot': '"',
						'lt'  : '<',
						'gt'  : '>'
					},
					translator = function($0, $1) {
						return translate[$1];
					};

				return function(s) {
					return s.replace(translate_re, translator);
				};
			})();

			var str = String(text).replace(/(<([^>]+)>)/ig, '');

			var str_out = replaceHtmlEntites(str);

			return str_out;

		};
	}
})();
