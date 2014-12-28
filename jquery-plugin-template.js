/**
 * jQuery Plugin Template
 * 
 * Kristian Matthews
 * Copyright (c) 2014 Kristian Matthews (https://epickris.com) All rights reserved.
 * https://github.com/EpicKris/jquery-plugin-template
 * 1.0.0
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Requires jQuery');
}

(function ($) {
	var requiredVersion = '1.11.2';
	var version = {
		required: requiredVersion.split(' ')[0].split('.'),
		loaded: $.fn.jquery.split(' ')[0].split('.')
	};
	if ((version.loaded[0] <= version.required[0] && version.loaded[1] <= version.required[1] && version.loaded[2] < version.required[2])) throw new Error('Polar\'s JavaScript requires at least jQuery ' + requiredVersion);
})(jQuery);

(function ($) {
	'use strict';

	function Plugin (element, options) {
		this.options = $.extend(true, $.fn.formSection.defaults, options);
		this.$element = $(element);
	}

	Plugin.prototype = {
		constructor: Plugin,
		version: '1.0.0',
		init: function () {
			
		}
	};

	$.fn.jQueryPluginTemplate = function (method, options) {
		return this.each(function () {
			var $this = $(this);
			var data = $this.data('fn.jQueryPluginTemplate');

			options = (typeof method === 'object') ? method : options;

			if ( ! data) $this.data('fn.jQueryPluginTemplate', (data = new Plugin(this, options)));

			data[(typeof method === 'string') ? method : 'init']();
		});
	};

	$.fn.formSection.defaults = {};
})(jQuery);
